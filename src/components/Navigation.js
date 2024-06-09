import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <h1>Allen Tiempo</h1>
      <ul>
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li className={classes.call}>Get in touch!</li>
      </ul>
    </nav>
  );
};

export default Navigation;
