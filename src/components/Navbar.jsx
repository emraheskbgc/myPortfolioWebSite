import React from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import socaialData from "../data/social.json";
import navData from "../data/navbar.json";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div
      className={`fixed w-full h-[70px] flex justify-between items-center px-4 ${props.light}  `}
    >
      {/* LOGO  */}
      <div className="w3-animate-top">
        <img
          src={`${
            props.isActive ? "assets/darklogo.jpg" : "assets/lightlogo.jpg"
          }`}
          alt=""
          className="rounded-full"
          style={{ width: "60px", height: "60px" }}
        />
      </div>
      {/* MENU */}
      <ul className="hidden md:flex w3-animate-top">
        <img
          src="assets/sun.png"
          alt="dark thema"
          style={{ width: "40px" }}
          onClick={props.changeColor}
          className={`cursor-pointer ${props.isActive ? "" : "hidden"}`}
        />
        <img
          src="assets/soon.png"
          onClick={props.changeColor}
          className={`cursor-pointer ${props.isActive ? "hidden" : ""}`}
          alt="light thema"
          style={{ width: "35px" }}
        />
        {navData.map((navItem, index) => (
          <li key={index} className=" hover:text-pink-600">
            <Link to={navItem.path} smooth={true} duration={500}>
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Hamburger  */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        {navData.map((navItem, index) => (
          <li key={index} className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to={navItem.path}
              smooth={true}
              duration={500}
            >
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Social icons  */}

      <div className="hidden sm:flex fixed flex-col top-[35%] left-0 w3-animate-left ">
        <ul>
          {socaialData.map((socials, index) => (
            <li
              key={index}
              className={`w-[160px] h-[45px] mb-1 rounded-lg flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500
               ${socials.name === "Github" ? "bg-[#333333]" : ""}
               ${socials.name === "Linkedin" ? "bg-blue-600" : ""}
               ${socials.name === "Whatsapp" ? "bg-[#25D366]" : ""}`}
            >
              <a
                href={socials.path}
                target="_blank"
                className="flex items-center justify-between w-full font-bold text-gray-300"
              >
                {socials.name}{" "}
                <img src={socials.icon} className="w-[30px]" alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
