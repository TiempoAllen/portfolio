import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <h1>Allen Tiempo</h1>
      <ul>
        <li>
          <a href="#about" className="nav-link">
            About Me
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#works" className="nav-link">
            Projects
          </a>
        </li>
        <button className={classes.call}>
          <a href="#contact" className="nav-link">
            Get in touch!
          </a>
        </button>
      </ul>
    </nav>
  );
};

export default Navigation;
