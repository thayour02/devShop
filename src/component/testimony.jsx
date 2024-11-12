import { testimony } from "../data/data"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";


const SimpleNextArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}>
            Next
        </div>
    )
}
const SimplePrevArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            Prev
        </div>
    )
}
export default function Testimony() {
    const slider = React.useRef(null)

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SimpleNextArrow />,
        prevArrow: <SimplePrevArrow />
    };

    return (
        <div className="bg-base-200 -mt-8 xl:mx-10 my- h-[600px]">
            <div className="items-center pt-20">
                {/* arraow slick btn */}
                <div className="md:absolute right-3 -mt-4  mb-10 md:mr-24">
                    <button onClick={() => slider?.current?.slickPrev()} className="btn p-2 bg-zinc-200 rounded-full ml-5">
                        <FaAngleLeft className="w-8 h-8 p-1 " color="red" />
                    </button>

                    <button onClick={() => slider?.current?.slickNext()} className="btn p-2 bg-zinc-200 rounded-full ml-5">
                        <FaAngleRight className="w-8 h-8 p-1" color="yellow" />
                    </button>

                </div>

                <Slider ref={slider} {...settings}
                    className="overflow-hidden mt-10  ">
                    {
                        testimony.map((item, i) => (
                            <div key={i}>
                                <div className="card bg-blue-100 w-96 ml-4 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src={item.image}
                                            alt="Shoes"
                                            className="rounded-full w-[100px] h-[100px]" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>{item.des}</p>
                                        <div className="rating gap-1">
                                            {[...Array(5)].map((_, index) => {
                                                const heartColor = index < item.rating ? `bg-red-400` : `bg-gray-400`;
                                                return (
                                                    <input
                                                        key={index}
                                                        type="radio"
                                                        name={item.rating}
                                                        className={`mask mask-heart ${heartColor}`}
                                                        checked={index + 1 === item.rating}
                                                        readOnly
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>

    )
}