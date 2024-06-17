import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import monitor from "../assets/monitor.svg";
import reactjs from "../assets/reactjs.svg";
import server from "../assets/server.svg";

export const WORKS = [
  {
    name: "Sky Landing Page",
    src: project1,
    type: "Frontend Development",
    github: "https://github.com/TiempoAllen/sky-landingpage.git",
  },
  {
    name: "Calculator",
    src: project2,
    type: "Web Development",
    github: "https://github.com/TiempoAllen/calculator.git",
  },
  {
    name: "CITU Streamlined Service Portal",
    src: project3,
    type: "Full-Stack Development",
    github: "https://github.com/TiempoAllen/streamlined-service-portal.git",
  },
  {
    name: "Weather App",
    src: project4,
    type: "Full-Stack Development",
    github: "https://github.com/TiempoAllen/weather-app.git",
  },
  {
    name: "Campus Sync",
    src: project5,
    type: "Full-Stack Development",
    github: "https://github.com/TiempoAllen/campus-sync.git",
  },
];

export const EXPERTISE = [
  {
    id: 1,
    title: "Software",
    sub_title: "Development",
    content:
      "Specialized in Object-Oriented Programming principles and utilizing robust languages like Java and Javascript.",
    src: monitor,
  },
  {
    id: 2,
    title: "Frontend Dev",
    sub_title: "ReactJS",
    content:
      "Skilled in crafting responsive and user-friendly web interfaces using HTML, CSS, JS, ReactJS Framework.",
    src: reactjs,
  },
  {
    id: 3,
    title: "Backend Dev",
    sub_title: "ExpressJS, PostgreSQL",
    content:
      "Excel in implementing APIs with ExpressJS and Spring Boot. Knowledgable with relational databases like PostgreSQL and MySQL.",
    src: server,
  },
];
