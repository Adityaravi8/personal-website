import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[90px] flex flex-row items-center justify-between text-white px-3 font-serif bg-black z-10">
      <h1 className="ml-5 text-2xl p-3">Aditya Ravi</h1>
      <div className="flex flex-row gap-10 text-2xl justify-end items-center p-3">
        {/*DESKTOP NAV */}
        <ul className="md:flex flex-row gap-10 hidden">
          <li>
            <a
              href="#About"
              className="hover:underline underline-offset-8 decoration-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="hover:underline underline-offset-8 decoration-4"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="hover:underline underline-offset-8 decoration-4"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:underline underline-offset-8 decoration-4"
            >
              Contact
            </a>
          </li>
        </ul>
        {/*MOBILE NAV*/}
        <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-10 bg-black"
          }
        >
          <li>
            <a
              href="#About"
              className="py-8 text-4xl hover:underline underline-offset-8 decoration-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="py-8 text-4xl hover:underline underline-offset-8 decoration-4"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="py-8 text-4xl hover:underline underline-offset-8 decoration-4"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="py-8 text-4xl hover:underline underline-offset-8 decoration-4"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
