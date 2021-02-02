import React from "react";
import styles from "./Certificate.module.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const JsCert = (props) => {
  const js = useStaticQuery(graphql`
    query ba {
      image: file(relativePath: { eq: "js.jpg" }) {
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
      <a href="https://www.freecodecamp.org/certification/dmitriifrolov/javascript-algorithms-and-data-structures">
        <Img fluid={js.image.childImageSharp.fluid} />
      </a>
      <a href="https://www.freecodecamp.org/certification/dmitriifrolov/javascript-algorithms-and-data-structures">
        <p>JavaScript Algorithms and Data Structures</p>
      </a>
    </div>
  );
};

export default JsCert;
