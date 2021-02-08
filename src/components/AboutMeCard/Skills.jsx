import React from "react";
import styles from "./AboutMeCard.module.css";
import Logo from "../logos/Logo";
import JSlogo from "../../images/icons/javascript.svg";
import Bootstrap from "../../images/icons/bootstrap.svg";
import ReactLogo from "../../images/icons/react.svg";
import GatsbyLogo from "../../images/icons/gatsby.svg";
import html from "../../images/icons/html.svg";
import css from "../../images/icons/css.svg";
import psqlLogo from "../../images/icons/psql.svg";
import node from "../../images/icons/nodejs.svg";
import VSC from "../../images/icons/vsc.svg";
import Git from "../../images/icons/git.svg";
import GitHub from "../../images/icons/github.svg";
import Redux from "../../images/icons/redux.svg";
import figma from "../../images/icons/figma.png";
import npm from "../../images/icons/npm.svg";
import chrome from "../../images/icons/chrome.svg";

const Skills = (props) => {
  return (
    <div className={styles.wrapper} id="skills">
      <div className={styles.block}>
        <p className={styles.title}>Front End Skills:</p>
        <div className={styles.skills}>
          <Logo src={ReactLogo} text="ReactJS" />
          <Logo src={GatsbyLogo} text="GatsbyJS" />
          <Logo src={html} text="HTML" />
          <Logo src={css} text="CSS" />
          <Logo src={Bootstrap} text="Bootstrap" />
          <Logo src={JSlogo} text="Javascript" />
        </div>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>Back End Skills:</p>
        <div className={styles.skills}>
          <Logo src={node} text="Node.js + Express.js" />
          <Logo src={psqlLogo} text="PostgreSQL" />
        </div>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>Tools I Use:</p>
        <div className={styles.skills}>
          <Logo src={VSC} text="Visual Studio Code" className="text" />
          <Logo src={Git} text="Git" />
          <Logo src={GitHub} text="Github" />
          <Logo src={Redux} text="Redux" />
          <Logo src={figma} text="Figma" />
          <Logo src={npm} text="npm" />
          <Logo src={chrome} text="Chrome Developer Tools" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
