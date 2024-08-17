import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import React from "../assets/react.png";
import Node from "../assets/nodepic.png";
import GIT from "../assets/git1.png";
import TW from "../assets/tailwind.png";
import { IoLogoGithub } from "react-icons/io5";

function Skills() {
  return (
    <div
      name="skills"
      className="w-full text-center  bg-[#f3f3f3] text-[#f3f3f3]"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto py-10 px-4 flex flex-col justify-center  w-full h-full">
        <div>
          <p className="text-5xl text-[#0F1624]  font-bold ">Skills</p>
          <p className="py-4 text-[#0F1624] text-xl font-thin">
            These are the technologies I have the most experience with:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-[#0F1624] justify-center">
          <div className=" flex flex-col gap-4 py-4  justify-evenly items-center hover:scale-110 duration-500">
            <img className="w-20 " src={HTML} alt="html icon" />
            <p className="">HTML</p>
          </div>
          <div className="flex flex-col  gap-4 py-4 justify-evenly items-center hover:scale-110 duration-500">
            <img className="w-20 " src={CSS} alt="html icon" />
            <p className="">CSS</p>
          </div>
          <div className="flex flex-col gap-4 py-4  justify-evenly items-center hover:scale-110 duration-500">
            <img className="w-20 " src={JS} alt="html icon" />
            <p className="">JavaScript</p>
          </div>
          <div className=" flex flex-col gap-4 py-4  justify-evenly items-center hover:scale-110 duration-500">
            <img className="w-20 " src={React} alt="html icon" />
            <p className="">React</p>
          </div>

          <div className=" flex flex-col gap-4 py-4  justify-evenly items-center hover:scale-110 duration-500">
            <img className="w-20 " src={Node} alt="html icon" />
            <p className="">Node JS</p>
          </div>
          <div className=" flex flex-col gap-4 py-4  justify-evenly items-center hover:scale-110 duration-500">
            <img className="w-20 " src={TW} alt="html icon" />
            <p className="">Tailwind CSS</p>
          </div>
          <div className="flex flex-col gap-4 py-4  justify-evenly items-center hover:scale-110 duration-500">
            <img className="w-20 " src={GIT} alt="html icon" />
            <p className="">GIT</p>
          </div>
          <div className=" flex flex-col gap-4 py-3  justify-evenly items-center hover:scale-110 duration-500">
            <IoLogoGithub size={90} />
            <p className="">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
