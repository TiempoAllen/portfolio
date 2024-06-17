import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <h1>Allen Tiempo</h1>
      <ul>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#works">Projects</a>
        </li>
        <button className={classes.call}>
          <a href="#contact">Get in touch!</a>
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
