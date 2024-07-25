import Movie from "../assets/moviedb.png";
import Shop from "../assets/store.png";
import Quiz from "../assets/quizpic.png";
import Todo from "../assets/to-doIMG.png";

function Work() {
  return (
    <div name="work" className=" pt-10 w-full h-fit text-black bg-[#0F1624]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 text-[#f3f3f3] border-[#4CB9E7]">
            My Projects
          </p>
          <p className="py-3 text-xl text-gray-300">
            Check out some of the projects I&apos;ve worked on recently:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1   bg-white rounded-md ">
            <a
              href="https://allmoviesdb.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={Movie}
                alt=""
                className="rounded-md rounded-b-none hover:brightness-50"
              />
            </a>
            <div className=" p-4">
              <h2 className="font-bold text-2xl mb-2 ">Movie Database</h2>
              <a
                href="https://allmoviesdb.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="bg-[#4CB9E7] text-white px-2 py-1 cursor-pointer  rounded-full text-sm my-1"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/dpapadat94/movieDB"
                rel="noreferrer"
                target="_blank"
                className="bg-[#4CB9E7] text-white px-2 py-1 mx-2 rounded-full text-sm my-1"
              >
                Code
              </a>
              <p className="text-s mt-1">
                A responsive web app that allows users to search and filter
                through movies and television shows. By clicking any of the
                titles, a details page will be generated for that movie or show.
                All data is pulled from the TMDB API.
              </p>
              <div className="flex  mt-5 justify-around  ">
                <p className="text-xs font-bold">React</p>
                <p className="text-xs font-bold">CSS</p>
                <p className="text-xs font-bold">API</p>
                <p className="text-xs font-bold">Vite</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1   bg-white rounded-md ">
            <a
              href="https://dpreactshop.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={Shop}
                alt=""
                className="rounded-md rounded-b-none hover:brightness-50"
              />
            </a>

            <div className=" p-4">
              <h2 className="font-bold text-2xl mb-2 ">E-Commerce Shop</h2>
              <a
                href="https://dpreactshop.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="bg-[#4CB9E7] text-white px-2 py-1  rounded-full text-sm my-1"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/dpapadat94/ReactStore"
                rel="noreferrer"
                target="_blank"
                className="bg-[#4CB9E7] text-white px-2 py-1 mx-2 rounded-full text-sm my-1"
              >
                Code
              </a>
              <p className="text-s mt-1">
                A responsive e-commerce website that features working cart
                functionality created with the React Context API. Products
                listed on this site are fetched from the FakeStore API.
              </p>
              <div className="flex  mt-5 justify-around  ">
                <p className="text-xs font-bold">React</p>
                <p className="text-xs font-bold">Tailwind CSS</p>
                <p className="text-xs font-bold">API</p>
                <p className="text-xs font-bold">Vite</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1   bg-white rounded-md ">
            <a
              href="https://dpquizapp.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={Quiz}
                alt=""
                className="rounded-md rounded-b-none hover:brightness-50"
              />
            </a>

            <div className=" p-4">
              <h2 className="font-bold text-2xl mb-2 ">Quiz App</h2>
              <a
                href="https://dpquizapp.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="bg-[#4CB9E7] text-white px-2 py-1  rounded-full text-sm my-1"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/dpapadat94/Quiz-APP"
                rel="noreferrer"
                target="_blank"
                className="bg-[#4CB9E7] text-white px-2 py-1 mx-2 rounded-full text-sm my-1"
              >
                Code
              </a>
              <p className="text-s mt-1">
                {" "}
                Quiz app is a general knowledge quiz that shows results in real
                time. This application also tracks your answers to display a
                total score on a results page when finished with entire quiz.
              </p>
              <div className="flex  mt-5 justify-around  ">
                <p className="text-xs font-bold">React</p>
                <p className="text-xs font-bold">CSS</p>
                <p className="text-xs font-bold">Vite</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1   bg-white rounded-md ">
            <a
              href="https://prioritytodolist.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={Todo}
                alt=""
                className="rounded-md rounded-b-none hover:brightness-50"
              />
            </a>

            <div className=" p-4">
              <h2 className="font-bold text-2xl mb-2 ">Task Manager</h2>
              <a
                href="https://prioritytodolist.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="bg-[#4CB9E7] text-white px-2 py-1   rounded-full text-sm my-1"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/dpapadat94/T0-do-list-June24"
                rel="noreferrer"
                target="_blank"
                className="bg-[#4CB9E7] text-white px-2 py-1 mx-2 rounded-full text-sm my-1"
              >
                Code
              </a>
              <p className="text-s mt-1">
                To Do list web application that allows users to add/delete items
                and select one of three priority levels for the task. The user
                can mark tasks as complete which will send the task to a
                seperate list of completed tasks.
              </p>
              <div className="flex  mt-5 justify-around  ">
                <p className="text-xs font-bold">React</p>
                <p className="text-xs font-bold">Tailwind CSS</p>
                <p className="text-xs font-bold">Vite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
