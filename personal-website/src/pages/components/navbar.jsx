import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-20 py-5 px-5 bg-black">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl cursor-pointer text-white">Aditya Ravi</h1>

                {/* Hamburger Icon */}
                <div className="md:hidden relative z-30" onClick={toggleMenu}>
                    {isOpen ? (
                        <FaTimes className="text-3xl cursor-pointer text-white" />
                    ) : (
                        <FaBars className="text-3xl cursor-pointer text-white" />
                    )}
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex py-auto">
                    <li className="px-6 text-2xl cursor-pointer hover:underline underline-offset-8 text-white">About</li>
                    <li className="px-6 text-2xl cursor-pointer hover:underline underline-offset-8 text-white">Projects</li>
                    <li className="px-6 text-2xl cursor-pointer hover:underline underline-offset-8 text-white">Contact</li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div
                className={
                    isOpen
                        ? `fixed top-0 left-0 h-full flex flex-col items-center justify-center w-full text-white bg-black z-10`
                        : `hidden`
                }
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-6 text-3xl">
                    <li className="cursor-pointer hover:underline underline-offset-8" onClick={toggleMenu}>
                        About
                    </li>
                    <li className="cursor-pointer hover:underline underline-offset-8" onClick={toggleMenu}>
                        Projects
                    </li>
                    <li className="cursor-pointer hover:underline underline-offset-8" onClick={toggleMenu}>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
}
