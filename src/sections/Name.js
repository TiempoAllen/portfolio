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
          <button>HIRE ME</button>
          <button>MY WORKS</button>
        </div>
      </main>
    </section>
  );
};

export default Name;
