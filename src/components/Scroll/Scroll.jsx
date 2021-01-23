import React from "react";
import styles from "../AboutMeCard/AboutMeCard.module.css";

const Scroll = (props) => {
  return (
    <div
      className={styles.content}
      style={{ overflowY: "scroll", height: "800px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
