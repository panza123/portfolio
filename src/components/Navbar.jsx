import React, { useState } from "react";
import logo from "../assets/images/logo1.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  function handleClick() {
    setNav(!nav);
  }
  function closeNav() {
    setNav(false);
  }
  return (
    <>
      <main
        className="fixed w-full h-[100px] flex justify-between
     items-center px-4 bg-[#0a192f] text-gray-300"
      >
        <div>
          <img src={logo} alt="" className="w-[50px]" />
        </div>
        {/* {menu} */}
        <ul className="hidden md:flex">
          <li>
            {" "}
            <Link activeClass="active" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link activeClass="active" to="about" smooth={true} duration={500}>
              About
            </Link>{" "}
          </li>
          <li>
            <Link activeClass="active" to="skill" smooth={true} duration={500}>
              Skill
            </Link>
          </li>
          <li>
            {" "}
            <Link activeClass="active" to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* {menu hamburger} */}
        <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
          {!nav ? <FaBars size={26} /> : <FaTimes size={26} />}
        </div>
        {/* {mobile menu} */}
        <ul
          className={
            nav
              ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden gap-10 "
              : "hidden"
          }
        >
          <button
            className="w-[150px] h-[50px] bg-slate-600
        text-2xl rounded-md  shadow-lg shadow-white hover:bg-gray-400 "
          >
            <li>
              {" "}
              <Link
                activeClass="active"
                to="home"
                smooth={true}
                duration={500}
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
          </button>
          <button
            className="w-[150px] h-[50px] bg-slate-600
        text-2xl rounded-md  shadow-lg shadow-white  hover:bg-gray-400 "
          >
            <li>
              {" "}
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={500}
                onClick={closeNav}
              >
                About
              </Link>
            </li>
          </button>

          <button
            className="w-[150px] h-[50px] bg-slate-600
        text-2xl rounded-md  shadow-lg shadow-white hover:bg-gray-400  "
          >
            <li>
              <Link
                activeClass="active"
                to="skill"
                smooth={true}
                duration={500}
                onClick={closeNav}
              >
                Skill
              </Link>
            </li>
          </button>

          <button
            className="w-[150px] h-[50px] bg-slate-600
        text-2xl rounded-md  shadow-lg shadow-white   hover:bg-gray-400 "
          >
            <li>
              <Link
                activeClass="active"
                to="work"
                smooth={true}
                duration={500}
                onClick={closeNav}
              >
                work
              </Link>
            </li>
          </button>

          <button
            className="w-[150px] h-[50px] bg-slate-600
        text-2xl rounded-md  shadow-lg shadow-white   hover:bg-gray-400 "
          >
            <li>
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={500}
                onClick={closeNav}
              >
                Contact
              </Link>
            </li>
          </button>
        </ul>

        {/* {social-icons} */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-[-10px]">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] mb-2 hover:ml-[10px] duration-300 bg-blue-600">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                className="flex justify-between items-center w-full text-white"
              >
                Linkedin
                <FaLinkedin size={30} />
              </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] mb-2 hover:ml-[10px] duration-300 bg-gray-600">
              <a
                href="https://github.com/"
                target="_blank"
                className="flex justify-between items-center w-full text-white"
              >
                Github
                <FaGithub size={30} />
              </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] mb-2 hover:ml-[10px] duration-300 bg-red-600">
              <a
                href="mailto:olowonlafaruq@gmail.com"
                target="_blank"
                className="flex justify-between items-center w-full text-white"
              >
                Email
                <HiOutlineMail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
