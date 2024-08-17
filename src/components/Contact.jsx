import { FaLinkedin } from "react-icons/fa";

function Contact({ handleResume }) {
  return (
    <div
      name="contact"
      className="w-full h-fit py-10 px-2 flex flex-col sm:flex-row justify-center gap-10 bg-[#0F1624] items-center sm:items-start  "
    >
      <div className="pb-8 leading-6 text-[#f3f3f3] flex flex-col gap-10 ">
        <p className="text-4xl  font-bold inline border-b-4 text-center pb-2 border-[#4CB9E7] text-[#f3f3f3]">
          Contact
        </p>
        <ul className="my-4 flex flex-col gap-5  sm:text-xl">
          <li>
            <b>Name</b>: Dennis Papadatos
          </li>
          <li>
            {" "}
            <b>Phone</b>: 704-960-8535
          </li>
          <li>
            <b>Email</b>: dennis.papadatos94@gmail.com
          </li>
        </ul>
        <div className="flex justify-center gap-2">
          <a
            rel="noreferrer"
            target="_blank"
            className="flex justify-between items-center w-full text-gray-300 "
            href="https://www.linkedin.com/in/dennis-papadatos-dev94/"
          >
            <li className="w-[95%] h-[50px] flex justify-between items-center   bg-blue-700">
              My LinkedIn <FaLinkedin size={30} />
            </li>
          </a>
          <button
            className="w-[95%] h-[50px] text-black flex justify-between p-2 items-center bg-[#4cb9e7] hover:text-white hover:bg-[#2d667c] 	 cursor-pointer  "
            onClick={handleResume}
          >
            My Resume
          </button>
        </div>
      </div>
      <form
        method="POST"
        action="https://getform.io/f/01b5ca71-45e5-46da-a159-c63e110d5d02"
        className="flex border-2  border-[#4CB9E7] flex-col max-w-[600px] p-3 w-11/12 sm:w-full"
      >
        <p className="text-gray-200 text-xl text-center py-4">
          Send Me a Message
        </p>
        <input
          className="p-2 bg-white"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="5"
          placeholder="message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#4CB9E7] hover:border-[#4CB9E7] px-4 py-3 my-8 mx-auto flex items-center ">
          Lets Talk
        </button>
      </form>
    </div>
  );
}

export default Contact;
