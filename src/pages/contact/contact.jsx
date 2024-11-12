import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="max-w-screen-2xl bg-blue-100  mx-auto xl:px-10 pt-40">
            <div className="flex md:flex-row flex-col md:gap-60 gap-10">
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
                className="md:w-1/2 bg-base-200  px-12 mx-4 pt-10 shadow-lg rounded-lg ">
                    <h1 className="font-semibold text-2xl">Contact Us</h1>
                    <p className="font-medium pt-2">Our friendly team will like to here from you</p>
                    <form action="https://getform.io/f/blllzqqb" method="POST">
                        <label className="input input-bordered flex items-center gap-2 my-10 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email"
                                required name="email"
                                className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text"
                                required name="username"
                                className="grow" placeholder="Username" />
                        </label>
                        <textarea required className="textarea textarea-bordered w-full h-[150px]" name="message" placeholder="Bio"></textarea>
                        <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 
                        to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md 
                        hover:scale-105 duration-300">Submit</button>
                    </form>

                </motion.div>
                <motion.div variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }} 
                    className="md:w-1/2 bg-base-200   md:mr-20   h-[620px] rounded-sm pt-10 ">
                    <h1 className="-mt-10 font-bold px-2">Our Address on Map</h1>
                    <div className="mapswrapper -mt-20 ">
                        <iframe width="450" height="650" className="pt-20" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=heritage%20Mall%20Dugbe&zoom=10&maptype=roadmap"></iframe><a href="https://www.fluxpromptgenerator.net">
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="my-8">
                <motion.div 
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
                    className="text-center">
                    <Link to="/contact" className="btn items-center">Contact us</Link>
                    <h1>We&apos;d love to hear from You</h1>
                </motion.div>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
                className="flex flex-col md:flex-row mt-10 items-center justify-between gap-8">
                    <div className="bg-base-200 h-[200px] shadow-lg rounded-lg w-[250px]">
                        <div className="">
                            <kbd className="kbd mx-4 mt-6">
                                <FaLocationDot color="blue" />
                            </kbd>
                            <div className="mt-4 mx-6">
                                <p className="font-semibold my-2">Visit Our Office</p>
                                <span className="text-sm font-small">Heritage Mall Dugbe</span>
                                <p className="text-sm font-small my-2">9VPH+XQ Ibadan, Nigeria</p>

                                <p className="text-sm font-bold">We&apos;re open from:
                                    <span className="font-bold  text-blue-300">Mon-Fri</span>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="bg-base-200 h-[200px] shadow-lg rounded-lg w-[250px]">

                        <div className="">
                            <kbd className="kbd mx-4 mt-6">
                                <FaPhoneVolume color="blue" />
                            </kbd>
                            <div className="mt-4 mx-6">
                                <p className="font-semibold my-2">Send an email</p>
                                <p className="text-sm font-small my-3">Chat with our lovely team</p>

                                <span className="font-bold  text-blue-300">devthayour@gmail.com</span>
                            </div>
                        </div>

                    </div>
                    <div className="bg-base-200 h-[200px] shadow-lg rounded-lg w-[250px]">

                        <div>
                            <kbd className="kbd mx-4 mt-6">
                                <FaPhoneVolume color="blue" />
                            </kbd>
                            <div className="mt-4 mx-6">
                                <p className="font-semibold my-2">Call us</p>
                                <span className="text-sm font-small my-2">08064675460</span>

                                <p className="text-sm font-bold">We&apos;re open from:
                                    <span className="font-bold  text-blue-300">Mon-Fri</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}