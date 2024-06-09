import React from "react";
import classes from "./About.module.css";
import id from "../assets/id.jpg";

const About = () => {
  return (
    <section className={classes.about}>
      <header>Discover</header>
      <div className={classes.main}>
        <img src={id} alt="id" />
        <div>
          <p>
            Welcome to my corner of the internet! I'm John Allen Tiempo, a web
            developer based in Cebu City, Philippines. With a passion for web
            development, I am dedicated to creating innovative and efficient web
            solutions. <br /> <br />
            When I'm not immersed in coding, I'm a student, constantly learning
            and expanding my knowledge. My journey in the field of web
            development is just beginning, and while I haven't achiev
            significant milestones yet, I'm driven by a mission to craft digital
            experiences that are both functional and visually appealing.
            <br /> <br /> Feel free to explore, connect, and join me on this
            exciting journey as I continue to grow and make my mark in the world
            of web development!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
