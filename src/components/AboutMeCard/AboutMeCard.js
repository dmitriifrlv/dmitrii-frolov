import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import LayoutCard from "./LayoutCard/LayoutCard"

const AboutMeCard = () => {
  const [route, setRoute] = useState("about");

  const onClickRouteChange = (route) =>{
    setRoute(route)
  };

  return(
    route === "about" 
    ? <LayoutCard
    title="About me"
    textLeft="skills"
    textRight="education"
    route="skills"
    onClickRouteChange={onClickRouteChange}>
      <AboutMe />
    </LayoutCard>
    : route === "skills" 
    ?
      <LayoutCard
        title="Skills"
        textLeft="about"
        textRight="education"
        route="skills"
        onClickRouteChange={onClickRouteChange}>
          <Skills />
      </LayoutCard>
    : <LayoutCard
        title="Education"
        textLeft="skills"
        textRight="about"
        route="skills"
        onClickRouteChange={onClickRouteChange}>
          <Education />
      </LayoutCard>
    );
  }

export default AboutMeCard;
