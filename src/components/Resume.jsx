import resume from "../assets/resumeSS.png";

function Resume() {
  return (
    <div
      name="resume"
      className="w-full h-fit flex flex-col justify-center bg-[#0F1624] items-center pb-8   "
    >
      <p className="text-4xl mb-8 text-left  font-bold inline border-b-4 border-[#4CB9E7] text-[#f3f3f3]">
        My Resume
      </p>
      <img className=" md:w-8/12 w-11/12" src={resume} alt="" />
    </div>
  );
}

export default Resume;
