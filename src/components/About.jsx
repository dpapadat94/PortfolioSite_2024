import Person from "../assets/Aboutme2.png";

function About() {
  return (
    <div
      name="about"
      className="w-full pb-20 pt-20 h-fit flex flex-col sm:flex-row justify-center items-center  bg-[#fff] text-gray-300"
    >
      <div className=" max-md:hidden h-4/6 w-1/3">
        <img className="w-[80%] 	" src={Person} alt="" />
      </div>
      <h1 className="flex md:hidden font-bold text-black mb-6 ml-6 md:ml-0 text-4xl">
        My Timeline
      </h1>
      <ol className="relative border-s h-fit w-1/3 max-md:w-9/12  max-md:mb-10  border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2020
          </time>
          <h3 className="text-lg font-semibold text-black">
            Graduated College
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Graduated from The University of North Carolina at Charlotte, with a
            Bachelor&apos;s degree in Marketing with a Concentration in
            Analytics.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Febuary 2022
          </time>
          <h3 className="text-lg font-semibold text-black">
            Started My Coding Journey
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            In January of 2022 while working in sales I began learning to code.
            Focusing on front end technologies such as HTML, CSS, JavaScript,
            React and more.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2023
          </time>
          <h3 className="text-lg font-semibold text-black">
            Web Development Bootcamp
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Attended TrueCoders Web Development Bootcamp. A full stack bootcamp
            which helped me further develop my front end skillset while also
            introducing me to back end technologies, such as NodeJs and SQL.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default About;
