import React from "react";
import Navigation from "../Navigation";
import About from "../../sections/About";
import Skills from "../../sections/Skills";
import Works from "../../sections/Works";
import Contact from "../../sections/Contact";
import Name from "../../sections/Name";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Name />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
    </>
  );
};

export default MainLayout;
