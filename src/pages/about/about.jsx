/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { approach } from "../../data/data"
import { FaArrowDown } from "react-icons/fa6";
import { team } from "../../data/data";
import { FaPassport } from "react-icons/fa6";


export default function About() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["design", "build", "deploy"]
    const [text, setText] = useState('')
    const period = 2000
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    const [selected, setSelected] = useState(null);
    const [enableMultiSelction, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple]
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        else (copyMultiple.splice(findIndexOfCurrentId, 1))
        setMultiple(copyMultiple)
    }

    useEffect(() => {
        const ticker = setInterval(tick, delta);
        return () => clearInterval(ticker);
    }, [delta, text]);


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

   
    return (
        <div className="container bg-blue-100 max-w-screen-2xl md:pt-20 pt-20 h-full">
            <div className='pt-0'>
                <h1 className="text-red-200 text-center font-semibold uppercase tracking-wide text-5xl mb-2">DevSHop</h1>
                <h2 className="text-4xl md:text-2xl text-blue-400 text-center leading-[30px]">We <h2 className="italic text-xl text-red-800"> {text} </h2> software products and solutions.</h2>
            </div>
            {/* about */}
            <div className=" bg-base-200  mt-10 mx-10 shadow-lg md:pt-10 rounded-xl flex md:flex-row flex-col md:gap-80  md:mx-20 h-[500px] md:h-[350px]">
                <div className="px-10 w-full">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.5, type: 'tween', stiffness: 100 }}>
                        <h1 className='font-bold text-5xl my-4 underline text-blue-600'>About Us</h1>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: -0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.5, type: "tween", stiffness: 100 }}>
                        <p className="italic">We&lsquo;re a team of expert developers, designers, and innovators passionate about crafting cutting-edge software solutions. Our mission is to empower businesses and organizations to thrive in the digital landscape.</p>
                    </motion.div>
                </div>
                <div className="px-10 w-full">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.5, type: 'tween', stiffness: 100 }}>
                        <h1 className='font-bold text-5xl my-4 underline text-blue-600'>Our Story</h1>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: -0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.5, type: "tween", stiffness: 100 }}>
                        <p className="italic">Founded in [Year], [DevShop Name] began as a vision to bridge the gap between technology and business. Our founders,Temitayo Usman, combined their expertise in software development, design, and entrepreneurship to create a devshop that delivers exceptional results.</p>
                    </motion.div>

                </div>
            </div>
            <div className="flex flex-col   md:flex-row gap-60 justify-center items-center xl:px-24 px-10 mt-20">

                <motion.div

                    className="md:w-1/2 bg-white w-[400px] my-4 shasow-xl h-[380px] md:h-[350px] text-center ">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.5, type: 'tween', stiffness: 100 }}>
                        <h1 className="font-bold text-5xl  underline text-blue-600 text-center">Our Value</h1>
                    </motion.div>
                    <li className="italic pt-2 px-2"><p className="font-bold">Innovation:</p> We stay ahead of the curve, embracing the latest technologies and trends.                        </li>
                    <li className="italic pt-2 px-2"><p className="font-bold">Collaboration:</p>We work closely with clients, listening to their needs and goals.
                    </li>
                    <li className="italic pt-2 px-2"><p className="font-bold">Quality:</p>We strive for perfection, delivering high-quality solutions.
                    </li>
                    <li className="italic pt-2 px-2"><p className="font-bold">Integrity:</p>We operate with transparency, honesty, and ethics.
                    </li>
                </motion.div>


                {/* team */}
                <motion.div
                    className="md:w-1/2 bg-white shadow-lg -mt-40 md:-mt-0 h-[290px] md:h-[350px] text-center">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.5, type: 'tween', stiffness: 100 }}>
                        <h1 className="font-bold text-5xl my-4 underline text-blue-600">Our Team</h1>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: -0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.5, type: "tween", stiffness: 100 }}>
                        <p className="italic">Our team consists of expert software engineers delivering exceptional services to clients in the US. We provide a dedicated team that seamlessly integrates with your business, ensuring a deep understanding of your needs.
                        </p>
                    </motion.div>

                </motion.div>
            </div>
            {/* teamList */}
            <div>
                <div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.5, type: 'tween', stiffness: 100 }}>
                        <h1 className='font-bold text-5xl pt-4 underline text-center text-blue-600'>Team</h1>
                    </motion.div>
                </div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
                    className="flex   mt-10 items-center justify-center gap-8">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
                        className='grid sm:grid-cols-3 grid-cols-1  gap-8  items-center'>
                        {
                            team.map((item, i) => (
                                <div key={i}
                                    className="bg-zinc-200 h-[200px] shadow-lg rounded-lg w-[400px]">
                                    <div className="flex  gap-10 pt-4 px-2">
                                        <div>
                                            <img src={item.image} alt="" className="rounded-full" />
                                        </div>
                                        <div>
                                            <p className="font-bold">  {item.name}</p>
                                            <p className="font-semibold italic">    {item.role}</p>
                                            <p className="font-semibold italic">   {item.skill}</p>
                                        </div>
                                        <div>
                                            <a href={item.href ? <FaPassport /> : ""}></a>
                                            {/* <a href={item.href}></a> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </motion.div>

                </motion.div>
            </div>


            <div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.5, type: 'tween', stiffness: 100 }}>
                    <h1 className="font-bold text-5xl text-center my-4 underline text-blue-600">Our Approach</h1>
                </motion.div>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.5, type: 'tween', stiffness: 100 }}
                className=" h-[200vh] w-[100vh] justify-center flex relative mx-10  md:mx-80 md:-mt-80 items-center">
                    <div className="">
                        {approach && approach.length > 0 ? (
                            approach.map((dataItem) => (
                                <div className="" key={dataItem.id} >
                                    <div
                                        onClick={
                                            enableMultiSelction
                                                ? () => handleMultiSelection(dataItem.id)
                                                : () => handleSingleSelection(dataItem.id)
                                        }
                                        className="accordion-title "
                                    >
                                        <button
                                            onClick={() => setEnableMultiSelection(!enableMultiSelction)}
                                            className="flex w-[380px] md:w-[500px] items-center cursor-pointer justify-between my-2 bg-gray-200 p-2 rounded"
                                        >
                                            {dataItem.approach}
                                            <FaArrowDown />
                                        </button>
                                    </div>
                                    {multiple.includes(dataItem.id) && (
                                        <div className=" bg-base-200 h-[230px] pt-8 italic text-center px-2  w-[380px] md:w-[500px]">{dataItem.desc}</div>
                                    )}
                                   
                                </div>
                            ))
                        ) : (
                            <div>No Items Found</div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}