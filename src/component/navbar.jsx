import { MdMarkEmailRead } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const NavItem = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
        </>
    );

    const NavIcon = (
        <div className="flex gap-6 items-center">
            <Link to=""><FaSquareXTwitter size={30} className="text-blue-400" /></Link>
            <a href="mailto:temyking@gmail.com.com"><MdMarkEmailRead size={30} color="red" /></a>
            <Link to=""><FaFacebook size={30} color="blue" /></Link>
        </div>
    );

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                ${isSticky ? "bg-black shadow-md" : "bg-transparent"}`
            }
        >
            <div className="navbar xl:px-28">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div className="flex gap-60 items-center px-2">
                            <div tabIndex={0} role="button" className="btn btn-white lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <Link to="/" className="text-xl font-bold md:hidden flex  items-center">
                                <p className="text-blue-700">thayour <span className="text-blue-200">DevShop</span></p>
                            </Link>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  h-[220px] ">
                            {NavItem}

                            <div className="mt-4 ">
                                <h1 className="font-bold text-xl">Socials:</h1>
                                {NavIcon}

                            </div>
                        </ul>

                    </div>
                    <Link to="/" className="text-xl font-bold flex items-center">
                        <p className="text-blue-700 pt-4 hidden md:block">thayour <span className="text-blue-200">DevShop</span></p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu menu-horizontal font-bold text-medium px-1">
                        {NavItem}
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex mx-40">
                    <ul className="menu menu-horizontal px-1">
                        {NavIcon}
                    </ul>
                </div>
            </div>
        </header>
    );
}
