import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-3 text-center max-w-screen-lg mx-auto h-full pb-40 xl:pt-20 xs:pt-40 mt-20  ">
        <div className="pb-3">
          <p className="text-4xl text-center font-bold inline border-b-4 border-gray-500 ">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/1b4b18e3-ff33-4c77-a2d9-64ab29b3bb60"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 xs:w-4/5"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
      <div>
        <footer className="flex-col-2">
          
          <h6 className="text-center">Copyright 2023 </h6>
          
        </footer>
      </div>
    </div>

    
  );
};

export default Contact;
