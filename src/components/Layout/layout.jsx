import React from "react";
import "./layout.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="test">
        <img src="https://i.ibb.co/QNK74tj/1.jpg" alt="" />
        <img src="https://i.ibb.co/qxMsjDv/2.jpg" alt="" />
        <img src="https://i.ibb.co/L0SXWMn/3.jpg" alt="" />
      </div>
    </>
  );
};

export default Layout;
