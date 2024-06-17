import React from "react";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Works from "./sections/Works";
import Contact from "./sections/Contact";
import Name from "./sections/Name";

const App = () => {
  return (
    <>
      <Name />
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
};

export default App;
