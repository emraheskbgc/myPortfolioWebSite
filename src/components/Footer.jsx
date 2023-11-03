import React from "react";

const Footer = (props) => {
  return (
    <>
      <div
        className={`${props.light} w-full flex justify-center items-center h-[40px] space-x-2`}
      >
        <img src="./assets/github2.png" alt="github" className="w-[30px] " />
        <img src="./assets/linkedin.png" alt="github" className="w-[30px]" />
        <img src="./assets/whatsapp.png" alt="github" className="w-[30px]" />
        <img src="./assets/mail.png" alt="github" className="w-[30px]" />
      </div>
      <div
        className={`${props.light} w-full flex justify-center items-center  space-x-2`}
      >
        Copyright © <span className="text-pink-600 pl-2">Emrah ESKİBAĞCI</span>
      </div>
    </>
  );
};

export default Footer;
