import React from "react";
import classes from "./About.module.css";
import id from "../assets/id.jpg";
import fileurl from "../assets/CV.pdf";

const About = () => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = fileurl;
    link.download = "Tiempo-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={classes.about} id="about">
      <div className={classes.main}>
        <img src={id} alt="id" />
        <div>
          <h1>About Me</h1>
          <p>
            Welcome to my corner of the internet! I'm John Allen Tiempo, a web
            developer based in Cebu City, Philippines. With a passion for web
            development, I am dedicated to creating innovative and efficient web
            solutions. <br /> <br />
            When I'm not immersed in coding, I'm a student, constantly learning
            and expanding my knowledge. My journey in the field of web
            development is just beginning, and while I haven't achieved
            significant milestones yet, I'm driven by a mission to craft digital
            experiences that are both functional and visually appealing.
            <br /> <br /> Feel free to explore, connect, and join me on this
            exciting journey as I continue to grow and make my mark in the world
            of web development!
          </p>
          <ul>
            <li>
              <p>
                <span>Name:</span> John Allen Tiempo
              </p>
              <p>
                <span>Date of Birth:</span> August 09, 2001
              </p>
            </li>
            <li>
              <p>
                <span>Address:</span> Capitol Site Cebu City, Philippines
              </p>
              <p>
                <span>Email:</span> tiempoallen@gmail.com
              </p>
            </li>
            {/* <li>
              <p>
                <span>Name:</span> John Allen Tiempo
              </p>
            </li>
            <li>
              <p>
                <span>Date of Birth:</span> August 09, 2001
              </p>
            </li>
            <li>
              <p>
                <span>Address:</span> Capitol Site Cebu City, Philippines
              </p>
            </li>
            <li>
              <p>
                <span>Email:</span> tiempoallen@gmail.com
              </p>
            </li> */}
          </ul>
          <button onClick={handleDownloadClick}>DOWNLOAD CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
