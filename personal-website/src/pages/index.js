import Head from "next/head";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>Aditya Ravi</title>
      </Head>
      <main className="min-h-screen bg-black text-white">
        <section id="navbar">
          <div className="fixed top-0 left-0 w-full z-20 py-5 px-5 bg-black">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl cursor-pointer text-white">
                Aditya Ravi
              </h1>

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
                <li className="px-6 text-2xl cursor-pointer hover:underline underline-offset-8 text-white">
                  About
                </li>
                <li className="px-6 text-2xl cursor-pointer hover:underline underline-offset-8 text-white">
                  Projects
                </li>
                <li className="px-6 text-2xl cursor-pointer hover:underline underline-offset-8 text-white">
                  Contact
                </li>
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
                <li
                  className="cursor-pointer hover:underline underline-offset-8"
                  onClick={toggleMenu}
                >
                  About
                </li>
                <li
                  className="cursor-pointer hover:underline underline-offset-8"
                  onClick={toggleMenu}
                >
                  Projects
                </li>
                <li
                  className="cursor-pointer hover:underline underline-offset-8"
                  onClick={toggleMenu}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="flex items-center justify-center min-h-screen bg-black p-6">
            <div className="p-10 md:p-16 flex flex-col md:flex-row items-center justify-center bg-black rounded-2xl shadow-2xl max-w-6xl mx-auto text-white w-full relative">
              <img
                src="/AdityaProfile.png"
                alt="AdityaProfile"
                className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-xl shadow-lg border-4 border-gray-700"
              />

              <div className="max-w-2xl text-center md:text-left md:pl-12 mt-6 md:mt-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-gray-100">
                  Hello, My Name is Aditya Ravi
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <div className="mt-8 md:mt-4 flex justify-center md:justify-start space-x-6">
                  <a
                    href="https://github.com/Adityaravi8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-2 md:p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:from-blue-400 hover:to-indigo-500 transition duration-300 ease-in-out transform hover:scale-110">
                      <img
                        src="/GitHub.svg"
                        width="40"
                        alt="Github"
                        className="text-white md:w-12 md:h-12"
                      />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aditya-ravi1b74aa241/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-2 md:p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:from-blue-400 hover:to-cyan-400 transition duration-300 ease-in-out transform hover:scale-110">
                      <img
                        src="/linkedin.svg"
                        width="40"
                        alt="LinkedIn"
                        className="text-white md:w-12 md:h-12"
                      />
                    </div>
                  </a>

                  <a
                    href="/Aditya_Ravi_Resume.pdf"
                    download
                    className="p-2 md:p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:from-blue-400 hover:to-indigo-500 transition duration-300 ease-in-out transform hover:scale-110 flex items-center space-x-2"
                  >
                    <img
                      src="/Resume.svg"
                      alt="Resume"
                      className="w-6 h-6 text-white md:w-12 md:h-12"
                    />
                    <span className="text-white font-semibold">
                      Download My Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
