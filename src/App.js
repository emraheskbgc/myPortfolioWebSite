import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Load from "./load/Load";
import Footer from "./components/Footer";

function App() {
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const changeColor = () => {
    setIsActive(!isActive);
  };
  const light = `${
    isActive ? "bg-[#0a192f] text-gray-300" : "bg-gray-200 text-[#0a192f]"
  }`;

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200; // Animasyonun başlaması için kaydırma eşiği

      if (scrollY > threshold) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        isActive={isActive}
        changeColor={changeColor}
        light={light}
        nav={nav}
        setNav={setNav}
      />
      <Home isActive={isActive} light={light} />
      <About light={light} isAnimated={isAnimated} nav={nav} />
      <Skills isActive={isActive} light={light} />
      <Work light={light} />
      <Contact light={light} isActive={isActive} />
      <Footer light={light} />
    </>
  );
}

export default App;

{
  /* <div>
{isLoading ? (
  <Load />
) : (
  <>
    <Navbar isActive={isActive} changeColor={changeColor} light={light} />
    <Home isActive={isActive} light={light} />
    <About light={light} />
    <Skills isActive={isActive} light={light} />
    <Work light={light} />
    <Contact light={light} isActive={isActive} />
    <Footer light={light} />
  </>
)}
</div> */
}
