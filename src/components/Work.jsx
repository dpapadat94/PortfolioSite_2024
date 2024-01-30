import Movie from "../assets/moviedb.png";
import Shop from "../assets/store.png";
import Quiz from "../assets/quizpic.png";
import Todo from "../assets/todoapp.png";

function Work() {
  return (
    <div name="work" className=" pt-10 w-full h-fit text-black bg-[#0F1624]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 text-[#f3f3f3] border-[#4CB9E7]">
            My Projects
          </p>
          <p className="py-3 text-xl text-gray-300">
            Check out some of the projects ive worked on recently
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
                Responsive web application that allows users to search for and
                filter through movies and tv-shows. Clicking any of the movies
                will generate a details page for the individual movie. data
                pulled from the TMDB API.
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
                Responsive e-commerce websites that features working cart
                functionality created with the react context API. Products on
                site are fetched from the FakeStore API.
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
                This app is a general knowledge quiz. The quiz will let you know
                in real time if your answer is correct, and will track your
                overall score through the quiz to display the results once all
                questions have been answered.{" "}
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
              href="https://todoappfirebasedp.netlify.app/"
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
              <h2 className="font-bold text-2xl mb-2 ">
                To do App (with firebase)
              </h2>
              <a
                href="https://todoappfirebasedp.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="bg-[#4CB9E7] text-white px-2 py-1   rounded-full text-sm my-1"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/dpapadat94/To-do-firebase"
                rel="noreferrer"
                target="_blank"
                className="bg-[#4CB9E7] text-white px-2 py-1 mx-2 rounded-full text-sm my-1"
              >
                Code
              </a>
              <p className="text-s mt-1">
                Responsive to do list web app that allows users to add items,
                delete items or mark them as completed. The App uses the
                firestore from firebase as the backend to manage the storage of
                all tasks
              </p>
              <div className="flex  mt-5 justify-around  ">
                <p className="text-xs font-bold">React</p>
                <p className="text-xs font-bold">Tailwind CSS</p>
                <p className="text-xs font-bold">Firebase</p>
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
