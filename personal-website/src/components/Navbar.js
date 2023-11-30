import React from "react";

function Navbar() {
  return (
    <div className="container flex flex-row items-center justify-between text-white font-serif">
      <h1 className=" ml-5 text-2xl p-3">Aditya Ravi</h1>
      <ul className="flex flex-row gap-10 text-2xl justify-end p-3">
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
    </div>
  );
}

export default Navbar;
