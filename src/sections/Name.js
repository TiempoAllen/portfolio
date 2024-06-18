import React from "react";
import classes from "./Name.module.css";
import Navigation from "../components/Navigation";
const Name = () => {
  return (
    <section className={classes.name}>
      <Navigation />
      <main className={classes.main}>
        <h1>ALLEN TIEMPO</h1>
        <p>Full-Stack Web Developer</p>
        <div className={classes.buttons}>
          <button>
            <a href="#contact">HIRE ME</a>
          </button>
          <button>
            <a href="#works">MY WORKS</a>
          </button>
        </div>
      </main>
    </section>
  );
};

export default Name;
