import React from "react";

const Contact = (props) => {
  const bgForm = `${props.isActive ? "bg-[#ccd6f6]" : "bg-orange-300"}`;
  const bgButton = `${
    props.isActive
      ? "border-white hover:bg-pink-600 hover:border-pink-600"
      : "border-black"
  }`;
  return (
    <div
      name="contact"
      className={`w-full  flex justify-center items-center p-4 ${props.light}`}
    >
      <form
        method="post"
        action="https://getform.io/f/80b56777-84f4-4996-99d1-7b6cc4668b52"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="h-[100px]"></div>
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or shoot me an email-{" "}
            <span className="inline border-b-2 border-pink-600">
              emraheskibagci595@gmail.com
            </span>
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className={`p-2  text-[#0a192f] ${bgForm}`}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className={`p-2 my-2 text-[#0a192f] ${bgForm}`}
        />
        <textarea
          placeholder="Message"
          name="message"
          cols="30"
          rows="10"
          className={`p-2  text-[#0a192f] ${bgForm}`}
        ></textarea>
        <button
          className={`border-2 hover:bg-orange-300 hover:border-orange-300 px-4 py-3 my-8 mx-auto flex items-center rounded ${bgButton}`}
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
