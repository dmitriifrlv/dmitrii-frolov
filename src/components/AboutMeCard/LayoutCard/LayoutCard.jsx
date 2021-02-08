import React from "react";
import styles from "./LayoutCard.module.css";
import Button from "/Users/dmitriifrolov/Desktop/portfolio/portfolio/src/components/Button/Button";
import Header from "./Header";

const LayoutCard = ({
  children,
  title,
  textLeft,
  textRight,
  onClickRouteChange,
}) => {
  return (
    <div className={styles.AboutMeCard}>
      <Header title={title} />
      <main className={styles.main}>{children}</main>
      <div className={styles.btnBlock}>
        <Button text={textLeft} function={() => onClickRouteChange(textLeft)} />
        <Button
          text={textRight}
          function={() => onClickRouteChange(textRight)}
        />
      </div>
    </div>
  );
};

export default LayoutCard;
