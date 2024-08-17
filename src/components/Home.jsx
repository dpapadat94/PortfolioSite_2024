import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// #071E3D
function Home({ handleResume }) {
  return (
    <div
      name="home"
      className="bg-hero  bg-cover bg-no-repeat bg-fit w-full h-screen "
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#4CB9E7] text-xl  sm:text-2xl">Hello, my name is</p>
        <h1 className="text-4xl md:5xl lg:text-7xl font-bold text-[#eaebee]">
          Dennis Papadatos,
        </h1>
        <h2 className="text-4xl md:5xl lg:text-7xl font-bold text-[#eaebee]">
          I&apos;m a Web Developer
        </h2>
        <p className="text-[#8892b0] text-sm sm:text-xl py-4 max-w-[800px]">
          I build and design engaging and responsive digital experiences. Please
          take a look around and feel free to contact me with any and all
          questions!
        </p>
        <div className=" flex flex-col md:flex-row justify-start gap-5 ">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className="flex text-black  rounded-full px-8 py-3 my-2   items-center bg-[#4cb9e7] hover:bg-[#4596e7] hover:text-white cursor-pointer  "
              activeClass="active"
              to="work"
              smooth={true}
              duration={500}
            >
              See My Projects
              <HiArrowNarrowRight className="ml-3" />
            </Link>
            <button
              className="flex text-white border-2 rounded-full px-8 py-3 my-2  items-center hover:bg-[#4cb9e7] hover:border-[#4cb9e7] 	 cursor-pointer  "
              onClick={handleResume}
            >
              My Resume
              <HiArrowNarrowDown className="ml-3" />
            </button>
          </div>

          <div className=" flex justify-start mx-4 gap-5">
            <a
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-fit text-gray-300"
              href="https://www.linkedin.com/in/dennis-papadatos-dev94/"
            >
              <li className="w-[55px] h-[55px] flex  rounded-full  bg-[#0B66C2] justify-between items-center  ">
                <FaLinkedin size={30} color="" />
              </li>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-fit text-gray-300"
              href="https://github.com/dpapadat94"
            >
              <li className="w-[55px] h-[55px] rounded-full bg-purple-700  flex justify-between items-center ">
                <FaGithub size={30} />
              </li>
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-fit text-gray-300 duration-200"
            >
              <li className="w-[55px] h-[55px]  rounded-full bg-[#b16031] flex justify-between items-center  ">
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
