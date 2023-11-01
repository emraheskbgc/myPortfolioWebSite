import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [isAtcive, setIsActive] = useState(true);
  const changeColor = () => {
    console.log("asdas");
    setIsActive(!isAtcive);
  };
  return (
    <div>
      <Navbar isAtcive={isAtcive} changeColor={changeColor} />
      <Home isAtcive={isAtcive} changeColor={changeColor} />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
