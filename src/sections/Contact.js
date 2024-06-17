import React from "react";
import classes from "./Contact.module.css";
import github_icon from "../assets/github-icon.svg";
import instagram_icon from "../assets/instagram-icon.svg";
import linkedin_icon from "../assets/linkedin-icon.svg";
import gmail_icon from "../assets/gmail.svg";

const ICON_DETAILS = [
  {
    name: "github",
    src: github_icon,
    url: "https://github.com/TiempoAllen",
  },
  {
    name: "instagram",
    src: instagram_icon,
    url: "https://www.instagram.com/llnsann_/",
  },
  {
    name: "linkedin",
    src: linkedin_icon,
    url: "https://www.linkedin.com/in/john-allen-tiempo-1350492a0/",
  },
  {
    name: "gmail",
    src: gmail_icon,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=tiempoallen@gmail.com",
  },
];

const Contact = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className={classes.contact} id="contact">
      <h1>ALLEN TIEMPO</h1>
      <div className={classes.icons}>
        {ICON_DETAILS.map((icon) => (
          <button
            className="list-buttons"
            onClick={() => handleClick(icon.url)}
          >
            <img src={icon.src} alt={icon.name} />
          </button>
        ))}
      </div>
      <p>Copyright © 2024 Allen Tiempo All Rights Reserved</p>
    </section>
  );
};

export default Contact;
