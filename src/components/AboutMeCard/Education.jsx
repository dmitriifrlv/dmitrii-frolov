import React from "react";
import styles from "./AboutMeCard.module.css";
import Scroll from "../Scroll/Scroll";
import Certificate from "../Certificate/Certificate";

const Education = (props) => {
  return (
    <Scroll>
      <p className={styles.title}>Certifications:</p>
      <Certificate
        src={"https://i.ibb.co/GF8XLJz/Image-22-01-2021-at-17-53.jpg"}
        href={
          "https://www.freecodecamp.org/certification/dmitriifrolov/responsive-web-design"
        }
        text={"Responsive Web Design"}
      />
      <Certificate
        src={"https://i.ibb.co/GF8XLJz/Image-22-01-2021-at-17-53.jpg"}
        href={
          "https://www.freecodecamp.org/certification/dmitriifrolov/javascript-algorithms-and-data-structures"
        }
        text={"JavaScript Algorithms and Data Structures"}
      />
      <p className={styles.title}>Formal Education:</p>
      <p className={styles.story}>MSc in Civil Engineering</p>
    </Scroll>
  );
};

export default Education;
