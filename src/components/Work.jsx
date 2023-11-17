import React, { useState } from "react";
import workData from "../data/work.json";

const Work = (props) => {
  const [visibleItems, setVisibleItems] = useState(6);
  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 6);
  };
  return (
    <div name="work" className={`w-full ${props.light} md:h-screen `}>
      <div className="max-w-[1000px]  mx-auto  p-4 flex flex-col justify-center w-full h-full">
        {/* CAPTION  */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Works
          </p>
        </div>
        {/* CONTAİNER  */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* GRID ITEMS  */}
          {workData.slice(0, visibleItems).map((work, index) => (
            <div
              key={index}
              style={{
                background: `url(${work.path})`,
                backgroundSize: "cover",
              }}
              className={`shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center  items-center mx-auto   content-div  ${
                props.workAnimated ? "w3-animate-zoom" : ""
              }`}
            >
              {/* HOVER EFFECTS  */}
              <div className="opacity-0 group-hover:opacity-100 text-center">
                <span className="text-2xl font-bold  text-white tracking wider">
                  {work.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={work.demoLink} target="_blank">
                    <button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={work.codeLink} target="_blank">
                    <button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleItems < workData.length && (
          <button
            className="mt-[40px] text-md hover:text-pink-600"
            onClick={showMoreItems}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Work;
