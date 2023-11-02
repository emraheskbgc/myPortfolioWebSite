import React from "react";
import skillsData from "../data/skills.json";

const Skills = (props) => {
  return (
    <div name="skills" className={`${props.light} w-full h-screen`}>
      {/* Container  */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          {skillsData.map((image, index) => (
            <div
              key={index}
              className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2 ${
                props.isActive ? "bg-[#0a192f]" : "bg-orange-300 text-[#0a192f]"
              }`}
            >
              <img src={image.path} className="w-20 mx-auto" alt="" />
              <p className="mt-4">{image.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
