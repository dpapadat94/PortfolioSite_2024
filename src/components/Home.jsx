import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// #071E3D
function Home() {
  return (
    <div name="home" className="bg-[#0F1624] w-full h-screen ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#4CB9E7] text-2xl">Hi, my name is</p>
        <h1 className="text-2xl sm:text-7xl font-bold text-[#eaebee]">
          Dennis Papadatos,
        </h1>
        <h2 className="text-2xl sm:text-7xl font-bold text-[#eaebee]">
          I&apos;m a Web Developer
        </h2>
        <p className="text-[#8892b0] text-sm sm:text-xl py-4 max-w-[8000px]">
          I build and design engaging and responsive digital experiences. Please
          take a look around and feel free to contact me with any and all
          questions!
        </p>
        <div className="flex justify-start gap-5 ">
          <Link
            className="hidden sm:flex text-white border-2 rounded-full px-8 py-3 my-2  items-center hover:bg-[#4CB9E7] cursor-pointer  "
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            See my Work
            <HiArrowNarrowRight className="ml-3" />
          </Link>
          <Link
            className="hidden sm:flex text-white border-2 rounded-full px-8 py-3 my-2  items-center hover:bg-[#4CB9E7] cursor-pointer  "
            activeClass="active"
            to="resume"
            smooth={true}
            duration={500}
          >
            My Resume
            <HiArrowNarrowDown className="ml-3" />
          </Link>

          <div className=" hidden md:flex justify-start mx-10 gap-5">
            <a
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-fit text-gray-300"
              href="https://www.linkedin.com/in/dennis-papadatos-dev94/"
            >
              <li className="w-[55px] h-[55px] flex  rounded-full  bg-[#0B66C2] justify-between items-center  bg-transparent">
                <FaLinkedin size={30} />
              </li>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-fit text-gray-300"
              href="https://github.com/dpapadat94"
            >
              <li className="w-[55px] h-[55px] rounded-full bg-[#b16031]  flex justify-between items-center  bg-transparent">
                <FaGithub size={30} />
              </li>
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-fit text-gray-300 duration-200"
            >
              <li className="w-[55px] h-[55px]  rounded-full bg-[#429958] flex justify-between items-center  bg-transparent">
                <HiOutlineMail size={30} />
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
