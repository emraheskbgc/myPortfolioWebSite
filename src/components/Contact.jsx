import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = (props) => {
  const bgForm = `${
    props.isActive
      ? "bg-[#ccd6f6] shadow-gray-600"
      : "bg-pink-200 shadow-pink-400"
  }`;
  const bgButton = `${
    props.isActive
      ? "border-white hover:text-black hover:bg-pink-600 hover:border-pink-600"
      : "border-black"
  }`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_winyqad";
    const templateId = "template_p35w0ak";
    const publicKey = "AojUg77MEqk3nDGh9";

    const templateParams = {
      form_name: name,
      from_email: email,
      to_name: "Emrah",
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent", response);
        setName("");
        setEmail("");
        setMessage("");
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("error sending email : ", error);
      });
  };

  return (
    <>
      <div
        name="contact"
        className={`w-full  flex justify-center items-center p-4 ${props.light}`}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="h-[100px]"></div>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Contact
            </p>
            <p className="py-4">
               Submit the form below or shoot me an email-{" "}
              <span className="inline border-b-2 border-pink-600">
                emraheskibagci595@gmail.com
              </span>
            </p>
          </div>
          <input
            className={`p-2 shadow-xl  text-[#0a192f] ${bgForm} rounded-3xl`}
            type="text"
            placeholder="Name Surname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={`p-2 my-4 shadow-xl  text-[#0a192f] ${bgForm} rounded-3xl`}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className={`p-2 shadow-xl  text-[#0a192f] ${bgForm} rounded-[20px]`}
            type="text"
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {showAlert ? (
            <button
              className={`border-2 alert alert-success bg-green-500 px-4 py-3 my-8 mx-auto flex items-center rounded `}
              type="submit"
            >
              <strong className="pr-1"> Mesajınız Gönderilmiştir! </strong>
              En kısa sürede dönüş yapılacaktır.
            </button>
          ) : (
            <button
              className={`border-2 hover:bg-pink-200 hover:border-pink-200 px-4 py-3 my-8 mx-auto flex items-center rounded ${bgButton}`}
              type="submit"
            >
              Send
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
