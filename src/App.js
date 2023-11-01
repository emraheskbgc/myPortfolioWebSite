import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Load from "./load/Load";

function App() {
  const [isAtcive, setIsActive] = useState(true);
  const changeColor = () => {
    setIsActive(!isAtcive);
  };
  const light = `${
    isAtcive ? "bg-[#0a192f] text-gray-300" : "bg-gray-200 text-[#0a192f]"
  }`;

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Load />
      ) : (
        <>
          <Navbar isAtcive={isAtcive} changeColor={changeColor} light={light} />
          <Home isAtcive={isAtcive} light={light} />
          <About light={light} />
          <Skills isAtcive={isAtcive} light={light} />
          <Work light={light} />
          <Contact light={light} />
        </>
      )}
    </div>
  );
}

export default App;
