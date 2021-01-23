import React from "react";
import styles from "./card.module.css";


const Card = (props) => {
    if (props.tool4) {
        return (
            <div className={styles.card}>
                    <p className={styles.title}>{props.title}</p>
                    <img src={props.pic} className={styles.pic} alt="logo"/>
                    <div className={styles.tools}>
                        <div>{props.tool1}</div>
                        <div>{props.tool2}</div>
                        <div>{props.tool3}</div>
                        <div>{props.tool4}</div>
                    </div>
                    
                    <p className={styles.description}>{props.description}</p>
                <div className={styles.btnBlock}>
                    <a href={props.live} className={styles.btn}>Live</a>
                    <a href={props.source} className={styles.btn}>Source</a>
                </div>
            </div>
        )
    } else if(props.tool3) {
        return (
            <div className={styles.card}>
                    <p className={styles.title}>{props.title}</p>
                    <img src={props.pic} className={styles.pic} alt="logo"/>
                    <div className={styles.tools}>
                        <div>{props.tool1}</div>
                        <div>{props.tool2}</div>
                        <div>{props.tool3}</div>
                    </div>
                    
                    <p className={styles.description}>{props.description}</p>
                <div className={styles.btnBlock}>
                    <a href={props.live} className={styles.btn}>Live</a>
                    <a href={props.source} className={styles.btn}>Source</a>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.card}>
                    <p className={styles.title}>{props.title}</p>
                    <img src={props.pic} className={styles.pic} alt="logo"/>
                    <div className={styles.tools}>
                            <div>{props.tool1}</div>
                        <div>{props.tool2}</div>
                    </div>
                            
                    <p className={styles.description}>{props.description}</p>
                <div className={styles.btnBlock}>
                    <a href={props.live} className={styles.btn}>Live</a>
                    <a href={props.source} className={styles.btn}>Source</a>
                </div>
            </div>
        )
    }
    
}

export default Card;