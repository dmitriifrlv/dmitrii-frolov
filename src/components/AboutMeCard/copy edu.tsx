// import React from "react";
// import styles from "./AboutMeCard.module.css";
// import { Scrollbars } from "react-custom-scrollbars";
// import Certificate from "../Certificate/Certificate";
// import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";

// const Education = (props) => {
//   const data = useStaticQuery(graphql`
//     query ima {
//       image: file(relativePath: { eq: "responsive.jpg" }) {
//         id
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `);
//   console.log(data);

//   return (
//     <Scrollbars>
//       <p className={styles.title}>Certifications:</p>
//       <div className={styles.cert}>
//         <Certificate
//           src={"https://i.ibb.co/GF8XLJz/Image-22-01-2021-at-17-53.jpg"}
//           href={
//             "https://www.freecodecamp.org/certification/dmitriifrolov/responsive-web-design"
//           }
//           text={"Responsive Web Design"}
//         >
//           <Img fluid={data.image.childImageSharp.fluid} />
//         </Certificate>
//       </div>
//       <div className={styles.cert}>
//         <Certificate
//           src={"https://i.ibb.co/8n3Tkwc/Image-22-01-2021-at-17-53.jpg"}
//           href={
//             "https://www.freecodecamp.org/certification/dmitriifrolov/javascript-algorithms-and-data-structures"
//           }
//           text={"JavaScript Algorithms and Data Structures"}
//         />
//       </div>
//       <p className={styles.title}>Formal Education:</p>
//       <div className={styles.fluid}>
//         <Img fluid={data.image.childImageSharp.fluid} />
//       </div>
//       <p className={styles.story}>MS in Civil Engineering</p>
//     </Scrollbars>
//   );
// };

// export default Education;





