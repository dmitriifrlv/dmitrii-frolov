import React from "react";
import styles from "./AboutMeCard.module.css";
import Scroll from "../Scroll/Scroll";
import Logo from "../logos/Logo";

const Skills = (props) => {
  return (
    <Scroll>
      <p className={styles.title}>Front end skills:</p>
      <div className={styles.skills}>
        <Logo
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          text="ReactJS"
        />
        <Logo
          src="https://www.gatsbyjs.com/Gatsby-Monogram.svg"
          text="GatsbyJS"
        />
        <Logo
          src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
          text="HTML"
        />
        <Logo src="https://svgur.com/i/TJB.svg" text="CSS" />
        <Logo
          src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
          text="Bootstrap"
        />
        <Logo
          src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          text="JavaScript"
        />
      </div>
      <p className={styles.title}>Back end skills:</p>
      <div className={styles.skills}>
        <Logo
          src="https://nodejs.org/static/images/logos/nodejs-new-pantone-white.svg"
          text="Node.js + Express.js"
        />
        <Logo
          src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
          text="PostgreSQL"
        />
      </div>
      <p className={styles.title}>Tools I use:</p>
      <div className={styles.skills}>
        <Logo
          src="https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg"
          text="Visual Studio Code"
          className="text"
        />
        <Logo
          src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
          text="Git"
        />
        <Logo
          src="https://cdn.worldvectorlogo.com/logos/github-icon.svg"
          text="Github"
        />
        <Logo
          src="https://cdn.worldvectorlogo.com/logos/redux.svg"
          text="Redux"
        />
        <Logo
          src="https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png"
          text="Figma"
        />
        <Logo src="https://cdn.worldvectorlogo.com/logos/npm.svg" text="npm" />
        <Logo
          src="https://cdn.worldvectorlogo.com/logos/chrome-7.svg"
          text="Chrome Developer Tools"
        />
      </div>
    </Scroll>
  );
};

export default Skills;
