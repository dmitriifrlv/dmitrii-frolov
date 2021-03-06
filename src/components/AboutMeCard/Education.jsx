import React from "react";
import styles from "./AboutMeCard.module.css";
import Responsive from "../Certificate/Responsive";
import JsCert from "../Certificate/JS";
import AneagBootcamp from "../Certificate/AneagBootcamp";

const Education = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Certifications:</p>
      <div className={styles.fluid}>
        <AneagBootcamp loading="eager" />
        <Responsive loading="eager" />
        <JsCert loading="eager" />
      </div>
      <p className={styles.title}>Formal Education:</p>

      <p className={styles.story}>MSc in Civil Engineering</p>
    </div>
  );
};

export default Education;
