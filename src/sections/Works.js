import React, { useState } from "react";
import classes from "./Work.module.css";
import arrow from "../assets/arrow.svg";
import { WORKS } from "../utils/utils";

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className={classes.works} id="works">
      <h1 className={classes.header}>My Works</h1>
      <ul className={classes.main}>
        {WORKS.map((work, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={work.src} alt={work.name} />
            <div>
              <h1 className={classes.work_name}>{work.name}</h1>
              {hoveredIndex === index ? (
                <p
                  className={classes.work_type}
                  onClick={() => handleClick(work.github)}
                >
                  <span>Go to Github</span> <img src={arrow} alt="arrow" />
                </p>
              ) : (
                <p className={classes.work_type}>{work.type}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
