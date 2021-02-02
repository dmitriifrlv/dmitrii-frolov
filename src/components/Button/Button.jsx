import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={styles.btn}
      onClick={props.function}
    >
      <p>{props.text}</p>
    </a>
  );
}
