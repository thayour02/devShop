import home from '../../assets/vid.mp4'
import { serve } from '../../data/data'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Serve() {
    return (
        <div>
            <div className=" bg-cover w-[100%] h-[100%] bg-black justify-center items-center pt-[80px] sm:pt-[100px] ">
                <video  className="w-[100%] h-[2600px] md:h-[1200px] object-cover  -mt-80  bg-cover  opacity-40"
                    src={home} autoPlay loop muted/>
                <div className='top-0 absolute mt-60 '>
                    <div className='text-center  absolute -mt-40 xl:px-80'>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.5, type: 'tween', stiffness: 100 }}>
                            <h1 className='font-bold text-5xl my-4 underline text-blue-600'>Services</h1>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.5, type: "tween", stiffness: 100 }}>
                            <p><span className='font-bold text-blue-400 text-xl'>Transform Your Business with </span> <span className='font-bold text-blue-400 text-2xl'>our innovative solutions</span></p>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, delay: 0.5, type: "tween", stiffness: 100 }}>
                            <p className='font-bold text-red-400 py-2 text-xl'>Our team of expert developers creafts cutting-edge software to drive your success</p>

                        </motion.div>
                    </div>
                    <div className='flex mt-10 items-center md:mt-20 md:space-x-1 justify-center mt-40 px-4 xl:px-10'>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.8, type: 'tween', stiffness: 100 }}
                            className='grid sm:grid-cols-3 grid-cols-1  gap-8  items-center'>
                            {
                                serve.map((item, i) => (
                                    <div key={i} className=" bg-base-200 h-[260px] shadow-lg rounded-lg w-[400px]">

                                        <div>
                                            <div className='flex pt-2'>
                                                <img src={item.image} alt="" className="kbd mx-4 h-20  w-40" />
                                                <p className="font-bold text-2xl my-2">{item.title}</p>
                                            </div>

                                            <div className=" mx-6">
                                                <span className="text-sm font-semibold my-2">{item.dec}</span>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </motion.div>
                    </div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.5, type: "tween", stiffness: 100 }}
                        className='mt-10 text-center relative'>
                        <Link to="/contact" className="btn items-center">Contact us</Link>
                    </motion.div>
                   
                </div>
            </div>
        </div>
    )
}