import React from "react";
import styles from "./logo.module.css";

export default function Logo(props) {
  return (
      <div className={styles.logo}>
          <img src={props.src} className={styles.img} alt="logo of a web development tool"/>
          <p>{props.text}</p>
      </div>
  )
}