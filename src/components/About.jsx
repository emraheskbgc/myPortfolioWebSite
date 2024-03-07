import React from "react";
import AboutData from "../data/about.json";

const About = (props) => {
  return (
    <>
      <div name="about" className={`w-full  ${props.light}   h-screen  `}>
        {props.isAnimated ? (
          <div
            className={`flex flex-col justify-center items-center  h-full  ${
              props.isAnimated ? "animate" : ""
            } ${props.nav ? "closeAnimated" : ""}`}
          >
            <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
              {/* Başlık  */}
              <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
                  About
                </p>
              </div>
              <div>{/* boş  */}</div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-bold">
                <p>{AboutData.caption}</p>
              </div>
              <div>
                <p>{AboutData.description}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default About;
