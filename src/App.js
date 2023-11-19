import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Load from "./load/Load";
import Footer from "./components/Footer";
import Sertificas from "./components/Sertificas";
import BgAnimation from "./components/BgAnimation";

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
  const [skillAnimated, setSkillAnimated] = useState(false);
  const [workAnimated, setWorkAnimated] = useState(false);
  const [sertificaAnimated, setSertificaAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 500; // about Animasyonun başlaması için kaydırma eşiği

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

  useEffect(() => {
    const handleScroll2 = () => {
      const scrollY = window.scrollY;
      const threshold = 1000; // about Animasyonun başlaması için kaydırma eşiği

      if (scrollY > threshold) {
        setSkillAnimated(true);
      } else {
        setSkillAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll2);

    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  useEffect(() => {
    const handleScroll3 = () => {
      const scrollY = window.scrollY;
      const threshold = 1500; // about Animasyonun başlaması için kaydırma eşiği

      if (scrollY > threshold) {
        setWorkAnimated(true);
      } else {
        setWorkAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll3);

    return () => {
      window.removeEventListener("scroll", handleScroll3);
    };
  }, []);
  useEffect(() => {
    const handleScroll4 = () => {
      const scrollY = window.scrollY;
      const threshold = 2200; // about Animasyonun başlaması için kaydırma eşiği

      if (scrollY > threshold) {
        setSertificaAnimated(true);
      } else {
        setSertificaAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll4);

    return () => {
      window.removeEventListener("scroll", handleScroll4);
    };
  }, []);

  return (
    <>
      <BgAnimation />
      <Navbar
        isActive={isActive}
        changeColor={changeColor}
        light={light}
        nav={nav}
        setNav={setNav}
      />
      <Home isActive={isActive} light={light} />
      <About light={light} isAnimated={isAnimated} nav={nav} />
      <Skills
        isActive={isActive}
        light={light}
        nav={nav}
        skillAnimated={skillAnimated}
      />
      <Work light={light} workAnimated={workAnimated} />

      <Sertificas light={light} sertificaAnimated={sertificaAnimated} />
      <Contact light={light} isActive={isActive} />
      <Footer light={light} />
    </>
  );
}

export default App;

// isLoading ? (
//   <Load />
// ) : (
//   <>
//     <Navbar
//       isActive={isActive}
//       changeColor={changeColor}
//       light={light}
//       nav={nav}
//       setNav={setNav}
//     />
//     <Home isActive={isActive} light={light} />
//     <About light={light} isAnimated={isAnimated} nav={nav} />
//     <Skills
//       isActive={isActive}
//       light={light}
//       nav={nav}
//       skillAnimated={skillAnimated}
//     />
//     <Work light={light} workAnimated={workAnimated} />
//     <Contact light={light} isActive={isActive} />
//     <Footer light={light} />
//   </>
// );
