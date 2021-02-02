import React from "react";
import styles from "./AboutMeCard.module.css";
import { Scrollbars } from "react-custom-scrollbars";
import Responsive from "../Certificate/Responsive";
import JsCert from "../Certificate/JS";

const Education = (props) => {
  return (
    <Scrollbars>
      <p className={styles.title}>Certifications:</p>
      <div className={styles.fluid}>
        <Responsive loading="eager" />
        <JsCert loading="eager" />
      </div>
      <p className={styles.title}>Formal Education:</p>

      <p className={styles.story}>MS in Civil Engineering</p>
    </Scrollbars>
  );
};

export default Education;
