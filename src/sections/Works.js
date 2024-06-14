import React from "react";
import classes from "./Work.module.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

const WORKS = [
  { name: "Sky Landing Page", src: project1, type: "Frontend Development" },
  { name: "Calculator", src: project2, type: "Web Development" },
  {
    name: "CITU Streamlined Service Portal",
    src: project3,
    type: "Full-Stack Development",
  },
  { name: "Weather App", src: project4, type: "Full-Stack Development" },
  { name: "Campus Sync", src: project5, type: "Full-Stack Development" },
];

const Works = () => {
  return (
    <section className={classes.works}>
      <h1 className={classes.header}>My Works</h1>
      <ul className={classes.main}>
        {WORKS.map((work) => (
          <li>
            <img src={work.src} alt={work.name} />{" "}
            <h1 className={classes.work_name}>{work.name}</h1>
            <p className={classes.work_type}>{work.type}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
