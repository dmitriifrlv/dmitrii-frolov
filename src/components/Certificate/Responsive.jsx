import React from "react";
import styles from "./Certificate.module.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Responsive = (props) => {
  const data = useStaticQuery(graphql`
    query b {
      image: file(relativePath: { eq: "responsive.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <div className={styles.cert}>
      <a href="https://www.freecodecamp.org/certification/dmitriifrolov/responsive-web-design">
        <Img fluid={data.image.childImageSharp.fluid} />
      </a>
      <a href="https://www.freecodecamp.org/certification/dmitriifrolov/responsive-web-design">
        <p>Responsive Web Design</p>
      </a>
    </div>
  );
};

export default Responsive;
