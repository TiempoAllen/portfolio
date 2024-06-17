import React from "react";
import classes from "./Skills.module.css";
import { EXPERTISE } from "../utils/utils";

const Skills = () => {
  return (
    <section className={classes.skills} id="skills">
      <h1>My Expertise</h1>
      <ul className={classes.main}>
        {EXPERTISE.map((expertise, index) => (
          <li key={expertise.id}>
            <div className={classes.header}>
              <img src={expertise.src} alt={expertise.title} />
              <div className={classes.title}>
                <h2>{expertise.title}</h2>
                <h2>{expertise.sub_title}</h2>
              </div>
            </div>
            <p>{expertise.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
