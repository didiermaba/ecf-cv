import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetWork from "../components/socialNetWork";
import SliderButtons from "../components/sliderButtons";
import "../styles/competences.css"
import SkillsBar from "../components/SkillsBar";
import ExperiencePro from "../components/ExperiencePro";
import Formation from "../components/Formation";


const Competences = () => {
  return (
    <div className="elt">
      <Mouse />
      <Navigation />
      <div className="home">
        <SocialNetWork />

        <SliderButtons left={"/"} right={"/portfolio"}/>
        <SkillsBar />
        <ExperiencePro />
        <Formation /><br />
      </div>
    </div>
  );
};

export default Competences;
