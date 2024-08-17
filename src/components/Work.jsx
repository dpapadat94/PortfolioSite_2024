import Movie from "../assets/moviedb.png";
import Shop from "../assets/store.png";
import Quiz from "../assets/quizpic.png";
// import Todo from "../assets/to-doIMG.png";
import Landscape from "../assets/landscape.png";

const projects = [
  {
    id: 1,
    img: Landscape,
    title: "Regenerative Garden",
    desc: "A responsive website I built for a local landscaping and gardening business in charlotte, NC. Optimized for SEO best practices ",
    tech: ["React", "Tailwind", "React Router", "Vite"],
    demoLink: "https://regenerativelandscapeclt.com/",
    gitLink: "https://github.com/dpapadat94/regenerative-landscape",
  },
  {
    id: 2,
    img: Movie,
    title: "Movie Database",
    desc: "A responsive web app that allows users to search and filter through movies and television shows. By clicking any of the titles, a details page will be generated for that movie or show. All data is pulled from the TMDB API.",
    tech: ["React", "CSS", "API", "Vite", "React Router"],
    demoLink: "https://allmoviesdb.netlify.app/",
    gitLink: "https://github.com/dpapadat94/movieDB",
  },
  {
    id: 3,
    img: Shop,
    title: "E-Commerce Shop",
    desc: "A responsive e-commerce website that features working cart functionality created with the React Context API. Products listed on this site are fetched from the FakeStore API.",
    tech: ["React", "Tailwind", "API", "Vite", "React Router"],
    demoLink: "https://dpreactshop.netlify.app/",
    gitLink: "https://github.com/dpapadat94/ReactStore",
  },
  {
    id: 4,
    img: Quiz,
    title: "Quiz App",
    desc: "Quiz app is a general knowledge quiz that shows results in real time. This application also tracks your answers to display a total score on a results page when finished with entire quiz.",
    tech: ["React", "Tailwind", "API", "Vite", "React Router"],
    demoLink: "https://dpquizapp.netlify.app/",
    gitLink: "https://github.com/dpapadat94/Quiz-APP",
  },
];

function Work() {
  return (
    <div
      name="work"
      className=" pt-10 pb-10 w-full h-fit text-black bg-[#0F1624]"
    >
      <h2 className="text-5xl text-white text-center mb-5">My Projects</h2>
      <p className="text-lg text-white text-center mb-5">
        Check out some of the projects I have been working on. All projects have
        a live demo and source code attached.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[90%] xl:max-w-[1050px] gap-6 justify-items-center  ">
        {projects.map((item) => (
          <div
            key={item.id}
            className="max-w-md flex flex-col h-full bg-[#f3f3f3] p-2  shadow-lg "
          >
            <a href={item.demoLink} target="_blank" rel="noreferrer">
              <img className="" src={item.img} alt={item.title} />
            </a>
            <div className="p-5 flex flex-col h-full justify-between border-t-[1px] border-gray-300">
              <div>
                <a href={item.demoLink} target="_blank" rel="noreferrer">
                  <h5 className="mb-2 text-xl tracking-tight text-gray-900">
                    {item.title}
                    {item.id === 1 && (
                      <span className="text-base  text-green-900">
                        {" "}
                        (Freelance work)
                      </span>
                    )}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">{item.desc}</p>
              </div>
              <div className="mt-auto">
                <div className="flex gap-1 mb-3">
                  <a
                    href={item.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="items-center text-center py-2 text-sm w-[50%]  text-white bg-[#0F1624] hover:bg-blue-800"
                  >
                    Visit Site
                  </a>
                  <a
                    href={item.gitLink}
                    target="_blank"
                    rel="noreferrer"
                    className="items-center py-2 w-[50%] text-sm  text-center text-white bg-[#4cb9e7] hover:bg-blue-500"
                  >
                    See Code
                  </a>
                </div>

                <div className="flex justify-center  gap-6 ">
                  {item.tech.map((techItem) => (
                    <p
                      className="text-[#0F1624] text-sm font-bold mt-5"
                      key={techItem}
                    >
                      {techItem}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
// #0F1624
{
  /* <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
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
</div> */
}
