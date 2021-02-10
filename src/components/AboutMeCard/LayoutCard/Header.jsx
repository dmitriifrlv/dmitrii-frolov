import React from "react";
import styles from "./LayoutCard.module.css";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
const Header = (props) => {
  return (
    <div className={styles.top}>
      <p className={styles.title}>{props.title}</p>
      <a href="/#">
        <Link className={styles.toHome} to="/">
          <FontAwesomeIcon icon={faTimesCircle} size="1x" />
        </Link>
      </a>
    </div>
  );
};

export default Header;
