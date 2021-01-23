import React from "react";
import styles from "./Certificate.module.css";

export default function Certificate(props) {
  return (
    <div className={styles.container}>
      <img src={props.src} className={styles.img} alt="" />
      <a className={styles.text} href={props.href}>
        {props.text}
      </a>
    </div>
  );
}
