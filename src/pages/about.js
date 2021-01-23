import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "../styles/about.css";
import "../styles/scroll.css";
import AboutMeCard from "../components/AboutMeCard/AboutMeCard";
const IndexPage = () => {
  return (
    <main>
      <title>About me</title>
      <Header />
      <div className="box">
        <AboutMeCard />
      </div>

      <Footer />
    </main>
  );
};

export default IndexPage;
