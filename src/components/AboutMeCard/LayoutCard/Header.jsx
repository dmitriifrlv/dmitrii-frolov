import React from "react";
import styles from "./LayoutCard.module.css";

const Header = (props) => {
  return (
    <div className={styles.top}>
      <p className={styles.title}>{props.title}</p>
    </div>
  );
};

export default Header;
