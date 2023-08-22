import React, { useState } from "react";
import logo from "./../Assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNavClick = () => setNav(!nav);
  return (
    <div className="fixed flex bg-black w-full justify-between items-center text-fuchsia-600">
      <nav>
        <img src={logo} alt="Dhiraj Kumar" style={{ width: "50px" }} />
      </nav>
      <ul className="hidden md:flex mx-4 ">
        <li>Home</li>
        <li>Education</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div onClick={handleNavClick} className="md:hidden z-10 mx-3">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black"
            : "hidden"
        }
      >
        <li className="py-10 text-3xl">Home</li>
        <li className="py-10 text-3xl">Education</li>
        <li className="py-10 text-3xl">Skills</li>
        <li className="py-10 text-3xl">Projects</li>
        <li className="py-10 text-3xl">Contact</li>
      </ul>
    </div>
  );
};
