import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen  flex justify-center bg-[#0F1624] items-center  "
    >
      <form
        method="POST"
        action="https://getform.io/f/01b5ca71-45e5-46da-a159-c63e110d5d02"
        className="flex flex-col max-w-[600px] w-11/12 sm:w-full"
      >
        <div className="pb-8 leading-6 text-[#f3f3f3] ">
          <p className="text-4xl  font-bold inline border-b-4 border-[#4CB9E7] text-[#f3f3f3]">
            Contact
          </p>
          <ul className="my-4  sm:text-xl">
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

          <a
            rel="noreferrer"
            target="_blank"
            className="flex justify-between items-center w-full text-gray-300 pl-4"
            href="https://www.linkedin.com/in/dennis-papadatos-dev94/"
          >
            <li className="w-[160px] h-[50px] flex justify-between items-center    bg-blue-700">
              My LinkedIn <FaLinkedin size={30} />
            </li>
          </a>
        </div>
        <p className="text-gray-300 py-4">Or Submit the form below:</p>
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
