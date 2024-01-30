import { useState } from "react";
import Logo from "../assets/dennis3.png";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" z-50 fixed w-full h-[80px] flex justify-between px-5 md:px-20  items-center bg-[#0F1624]  text-[#f3f3f3]">
      <div>
        <img src={Logo} alt="logoIMG" style={{ width: "225px" }} />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className=" hover:scale-110 text-m duration-200">
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=" hover:scale-110 text-m duration-200 ">
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" hover:scale-110 text-m duration-200 ">
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className=" hover:scale-110 text-m duration-200 ">
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 w-full h-screen bg-[#0F1624] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <a
          rel="noreferrer"
          target="_blank"
          className="flex justify-between items-center w-fit pb-3 text-gray-300"
          href="https://www.linkedin.com/in/dennis-papadatos-dev94/"
        >
          <li className="w-[55px] h-[55px] flex  rounded-full  bg-[#0B66C2] justify-between items-center  bg-transparent">
            <FaLinkedin size={30} />
          </li>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="flex justify-between items-center  pb-3 w-fit text-gray-300"
          href="https://github.com/dpapadat94"
        >
          <li className="w-[55px] h-[55px] rounded-full bg-[#b16031]  flex justify-between items-center  bg-transparent">
            <FaGithub size={30} />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default NavBar;
