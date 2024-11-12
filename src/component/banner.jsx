import home from '../assets/pexl.jpg'
import welcome from "../assets/Welcome.mp4"

export default function Banner() {
    return (
        <div className="relative md:h-[680px] h-[800px] bg-cover bg-black justify-center items-center pt-[80px] sm:pt-[100px]">
            <div
                className="absolute inset-0 bg-cover opacity-40"
                style={{ backgroundImage: `url(${home})` }}
            />



            <div className="relative z-10 text-white max-w-screen-2xl flex flex-col md:flex-row md:flex-row-reverse pt-40 px-2">
                <div className="mockup-phone md:mx-40 pt-2 md:-mt-40  ">
                    <div className="camera">

                    </div>
                    <div className="display">
                        <div className="artboard artboard-demo h-[300px] phone-1">

                            <div>
                                <video className="    w-[1200px]"
                                    src={welcome} autoPlay loop muted />

                            </div>
                            <div className='lg:hidden block mt-10'>
                                <a href='/contact' className="bg-blue-600 hover:bg-gray-300 transition-all duration-300 ease-in-top ease-out-bottom px-8 
                             font-semibold py-4 rounded-full text-white">Connect with us</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 -mt-[760px] md:-mt-0 md:px-20 md:py-20 px-4">
                    <h1 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">Build Better Software</h1>
                    <p className="text-xl text-[#A4A4A4]">Innovative solutions for modern developers</p>
                    <div className='hidden lg:block mt-20'>
                        <a href='/contact' className="bg-blue-600 hover:bg-gray-300 transition-all duration-300 ease-in-top ease-out-bottom px-8 py-4 mt-8 font-semibold rounded-full text-white">Connect with us</a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>



    )
}

