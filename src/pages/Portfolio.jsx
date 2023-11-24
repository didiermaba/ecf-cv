import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetWork from "../components/socialNetWork";
import SliderButtons from "../components/sliderButtons";
// import ProjectsData from "../components/data/projectsData"

const Portfolio = () => {
  return (
    <div className="elt">
      <Mouse />
      <Navigation />
      <div className="home">
        <h1>Portfolio</h1>
        <SocialNetWork />

        <SliderButtons left={"/competences"} right={"/contact"} />
      </div>
    </div>
  );
};

export default Portfolio;
