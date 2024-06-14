import React from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 90 },
    { name: "Javascript", percentage: 80 },
    { name: "ReactJS", percentage: 85 },
    { name: "ExpressJS", percentage: 65 },
    { name: "PostgreSQL", percentage: 70 },
    { name: "Bootstrap", percentage: 90 },
    { name: "TailwindCSS", percentage: 75 },
  ];

  return (
    <section className={classes.skills}>
      <h1>My Skills</h1>
      <ul>
        <div>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index}>
              <p
                className={classes.percentage}
                style={{ "--percentage": `${skill.percentage}%` }}
                data-percentage={`${skill.percentage}%`}
              ></p>
              <p>{skill.name}</p>
            </li>
          ))}
        </div>
        <div>
          {skills.slice(4).map((skill, index) => (
            <li key={index}>
              <p
                className={classes.percentage}
                style={{ "--percentage": `${skill.percentage}%` }}
                data-percentage={`${skill.percentage}%`}
              ></p>
              <p>{skill.name}</p>
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
};

export default Skills;
