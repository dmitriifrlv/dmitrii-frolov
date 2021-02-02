import React from "react";
import styles from "./card.module.css";
import Button from "../Button/Button";
import { Scrollbars } from "react-custom-scrollbars";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{props.title}</p>
      <Scrollbars>
      <div className={styles.middle}>
        <div className={styles.ImgContainer}>
          <a href={props.live}>
            <img src={props.pic} className={styles.pic} alt="logo" />
          </a>
        </div>
        
        <div className={styles.textBlock} id="scroll">
    
          <div className={styles.tools}>
            {props.tool1}
            {props.tool2}
            {props.tool3}
            {props.tool4}
            <p className={styles.description}>{props.description}</p>
          </div>
          
        </div>
        
      </div>
      </Scrollbars>
      <div className={styles.btnBlock}>
        <Button text="LIVE" href={props.live} />
        <Button text="SOURCE" href={props.source} />
      </div>
    </div>
  );
};

export default Card;
