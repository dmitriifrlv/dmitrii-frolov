import React from "react";
import { Helmet } from "react-helmet";
// import moduleName from '../images/1.jpg'

const Head = (props) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="https://i.ibb.co/QNK74tj/1.jpg" as="image" />
        <link rel="preload" href="https://i.ibb.co/qxMsjDv/2.jpg" as="image" />
        <link rel="preload" href="https://i.ibb.co/L0SXWMn/3.jpg" as="image" />

        <title>{props.title}</title>
      </Helmet>
    </>
  );
};

export default Head;
