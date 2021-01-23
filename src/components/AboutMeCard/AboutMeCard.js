import React, { useState, useEffect } from "react";
import styles from "./AboutMeCard.module.css";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";

const AboutMeCard = (props) => {
  const [route, setRoute] = useState("about");

  useEffect(() => setRoute("about"), []);

  if (route === "about") {
    return (
      <div className={styles.AboutMeCard}>
        <AboutMe />
        <div className={styles.btnBlock}>
          <button onClick={() => setRoute("skills")}>Skills</button>
          <button onClick={() => setRoute("education")}>Education</button>
        </div>
      </div>
    );
  } else if (route === "skills") {
    return (
      <div className={styles.AboutMeCard}>
        <Skills />
        <div className={styles.btnBlock}>
          <button onClick={() => setRoute("about")}>About</button>
          <button onClick={() => setRoute("education")}>Education</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.AboutMeCard}>
        <Education />
        <div className={styles.btnBlock}>
          <button onClick={() => setRoute("skills")}>Skills</button>
          <button onClick={() => setRoute("about")}>About</button>
        </div>
      </div>
    );
  }
};

export default AboutMeCard;
