import React from "react";
import styles from "./Certificate.module.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const AneagBootcamp = (props) => {
  const web = useStaticQuery(graphql`
    query wd {
      image: file(relativePath: { eq: "aneagwebdeb.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div className={styles.cert}>
      <a href="https://www.udemy.com/certificate/UC-a15efc68-c3b0-4667-b1dd-745fabcca443/">
        <Img fluid={web.image.childImageSharp.fluid} />
      </a>
      <a href="https://www.udemy.com/certificate/UC-a15efc68-c3b0-4667-b1dd-745fabcca443/">
        <p>The Complete Web Developer in 2021 (Zero To Mastery Academy)</p>
      </a>
    </div>
  );
};

export default AneagBootcamp;
