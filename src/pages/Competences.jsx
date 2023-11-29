import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetWork from "../components/SocialNetWork";
import "../styles/competences.css";
import SkillsBar from "../components/SkillsBar";
import ExperiencePro from "../components/ExperiencePro";
import Formation from "../components/Formation";
import Hobbies from "../components/Hobbies";

const Competences = () => {
  return (
    <div className="elt">
      <Mouse />
      <Navigation />
      <div className="home competences">
        <SocialNetWork />
        <SkillsBar />
        <div className="bloc">
          <ExperiencePro />
          <div className="colonne">
            <Formation />
            <Hobbies />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
