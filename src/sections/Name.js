import React from "react";
import classes from "./Name.module.css";
import Navigation from "../components/Navigation";
import id from "../assets/id.png";

const Name = () => {
  return (
    <section className={classes.name}>
      <Navigation />
      <main className={classes.main}>
        <div className={classes.first}>
          <p className={classes.hello}>Hello!</p>
          <h1>
            I'm <span>Allen Tiempo</span>
          </h1>
          <p>Full-Stack Web Developer</p>
          <div className={classes.buttons}>
            <button>HIRE ME</button>
            <button>MY WORKS</button>
          </div>
        </div>
        <img src={id} alt="id"></img>
      </main>
    </section>
  );
};

export default Name;
