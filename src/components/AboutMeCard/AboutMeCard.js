import React, { useState, useEffect } from "react";
import styles from "./AboutMeCard.module.css";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Button from "../Button/Button";

const AboutMeCard = (props) => {
  const [route, setRoute] = useState("about");

  useEffect(() => setRoute("about"), []);

  if (route === "about") {
    return (
      <div className={styles.AboutMeCard}>
        <div className={styles.top}>
          <p className={styles.title}>About me</p>
        </div>
        <AboutMe />

        <div className={styles.btnBlock}>
          <Button text="Skills" function={() => setRoute("skills")} />
          <Button text="Education" function={() => setRoute("education")} />
        </div>
      </div>
    );
  } else if (route === "skills") {
    return (
      <div className={styles.AboutMeCard}>
        <Skills />
        <div className={styles.btnBlock}>
          <Button text="About" function={() => setRoute("about")} />
          <Button text="Education" function={() => setRoute("education")} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.AboutMeCard}>
        <Education />
        <div className={styles.btnBlock}>
          <Button text="Skills" function={() => setRoute("skills")} />
          <Button text="About" function={() => setRoute("about")} />
        </div>
      </div>
    );
  }
};

export default AboutMeCard;
