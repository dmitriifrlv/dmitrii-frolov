import React from "react";
import styles from "./AboutMeCard.module.css";
import { Scrollbars } from "react-custom-scrollbars";

const AboutMe = () => {
  return (
    <Scrollbars>
      <div className={styles.wrapper}>
        <p className={styles.story}>
          It must have been about 15 years ago when I built my first website
          with constructor on <a href="https://www.ucoz.com/">ucoz</a>. Back
          then I was into bike trial and wanted to create my own web resource on
          this topic. Time went on and here we go - the year 2020, I decided to
          see what it looks like to build a website nowadays. This time I did
          not want to use any templates but built my own single page website
          from the scratch. The process of creating a website blown me away to
          such a degree that that after a few months of learning I decided to
          resign from my job in order to switch my career and dive deeper into
          web development. Since then I have been studying and practicing a
          various programming skills and enjoyed every moment of it! I used a
          number of online tutorials on websites such as freeCodeCamp, Udemy,
          YouTube, as well as reading the official documentation of the tools I
          use, programming books and have been building different projects.
        </p>
        <p className={styles.story}>
          Now I have decided that I gained enough knowledge to start working on
          something bigger that small personal projects and look for opportunity
          to become a part of a team where I can leverage my current skills and
          continue to grow as a web developer.
        </p>
      </div>
    </Scrollbars>
  );
};

export default AboutMe;
