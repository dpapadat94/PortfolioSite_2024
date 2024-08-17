import { useEffect, useState } from "react";
import Logo from "../assets/newlogo.png";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaList,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";

import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 55) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full min-h-[50px] h-[80px] flex justify-between items-center z-10 text-white px-6   ${
        sticky
          ? "fixed top-0 left-0 z-10  bg-[#0F1624] border-b-[1px] border-gray-500 shadow-lg"
          : "absolute top-13 text-white  bg-transparent "
      }`}
    >
      <div>
        <img src={Logo} alt="logoIMG" style={{ width: "225px" }} />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="  hover:scale-110 text-md duration-200">
          <Link
            activeClass="active"
            className="flex gap-2 items-center justify-cente p-3 "
            to="about"
            smooth={true}
            duration={500}
          >
            <IoPersonSharp className="text-[#4CB9E7]" />
            About
          </Link>
        </li>
        <li className="  hover:scale-110 text-md duration-200 ">
          <Link
            className="flex gap-2 items-center justify-cente p-3 "
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            <FaList className="text-[#4CB9E7]" />
            Skills
          </Link>
        </li>
        <li className="  hover:scale-110 text-md duration-200 ">
          <Link
            className="flex gap-2 items-center justify-center p-3"
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            <RiComputerLine className="text-[#4CB9E7]" />
            Projects
          </Link>
        </li>
        <li className="   hover:scale-110 text-md duration-200 ">
          <Link
            className="flex gap-2 items-center justify-center p-3"
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            <FaPhoneAlt className="text-[#4CB9E7]" />
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
