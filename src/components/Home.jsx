import React from "react";
import { Link } from "react-scroll";
import HomeData from "../data/about.json";

const Home = (props) => {
  return (
    <div
      name="home"
      className={`${props.light}  w-full h-screen  flex flex-row`}
    >
      {/* Container  */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full w3-animate-opacity">
        <p className="ml-8 text-pink-600 font-bold ">Hi, My name is</p>
        <h1 className="ml-8 text-4xl sm:text-5xl font-bold ">
          Emrah ESKİBAĞCI
        </h1>
        <h2 className="ml-8 text-4xl sm:text-5xl font-bold ">
          I'm Frontend Developer
        </h2>
        <p className="ml-8  py-4 max-w-[700px] font-bold">
          {HomeData.description}
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className={props.isActive ? "fill" : "fall"}>
              View Work
            </button>
          </Link>
          <a href="cv.pdf" download="cv.pdf" className="ml-8 ">
            <button className="text-pink-600  hover:text-black">
              <i className="fa fa-download"></i> Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="w-[300px] justify-center items-center flex h-screen mr-12 w3-animate-zoom">
        <img
          src="assets/emrahprofil.jpg"
          className="rounded-full md:w-60 md:h-60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
