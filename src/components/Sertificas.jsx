import React from "react";
import sertificaData from "../data/sertifica.json";

const Sertificas = (props) => {
  return (
    <div name="sertifica" className={`w-full ${props.light} `}>
      <div className="max-w-[1000px]  mx-auto  p-4 flex flex-col justify-center w-full h-full">
        {/* CAPTION  */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Sertificas
          </p>
        </div>
        {/* CONTAİNER  */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {sertificaData.map((sertifica, index) => (
            <div
              key={index}
              className={`shadow-xl shadow-[#040c16] group container rounded-tr-3xl rounded-bl-3xl flex  justify-center  items-center mx-auto   content-div  ${
                props.sertificaAnimated ? "w3-animate-zoom" : ""
              } `}
            >
              <div className=" text-center">
                <span className="text-2xl font-bold  tracking wider">
                  {sertifica.name}
                </span>
                <div className="pt-8 text-center">
                  <a
                    href={sertifica.path}
                    download={sertifica.path}
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-4 m-2  text-pink-600 font-bold text-lg">
                      <i className="fa fa-download"></i> Download
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sertificas;
