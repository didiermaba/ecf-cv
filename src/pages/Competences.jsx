import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetWork from "../components/socialNetWork";
import SliderButtons from "../components/sliderButtons";

const Competences = () => {
  return (
    <div>
      <Mouse />
      <Navigation />
      <div className="home">
        <h1>Compétences</h1>
        <SocialNetWork />

        <SliderButtons left={"/"} right={"/portfolio"}/>
      </div>
    </div>
  );
};

export default Competences;
