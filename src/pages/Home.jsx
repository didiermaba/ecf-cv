import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/socialNetWork";
import DynamicText from "../components/Dynamictext";
import "../styles/home.css";
import { motion } from "framer-motion";
import SliderButtons from "../components/sliderButtons";
import Pix from "../../public/media/profilePix.png";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <div className="elt">
      <Mouse />
      <Navigation />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <SocialNetwork />

        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              onDragEnd={() => {}}
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              <div className="profilePix">
                <img className="profile-img" src={Pix} alt="..."/>
                <div className="text-button">
                  <h5>
                    Mon nom est <span> Didier MABA</span>
                  </h5>
                  <p>
                    Je suis actuellement à la recherche d'une opportunité de
                    stage en distanciel ou en présentiel.
                  </p>
                  <p>
                    J'aurais le plaisir de mettre en pratique mes skills et
                    surtout d'apprendre avec vous.{" "}
                  </p>
                  <div className="CV">
                    <button>
                      <a
                        href="../../public/assets/img/Didier_Maba_CV_Stage_CDA (1).pdf"
                        download
                        className="btn"
                      >
                        {" "}
                        Télécharger mon CV
                      </a>
                    </button>
                  </div>
                </div>
              </div><br />
              CONCEPTEUR DEVELOPPEUR D'APPLICATION
            </motion.h1>
            <motion.h2
              drag
              onDragEnd={() => {}}
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              <DynamicText />
            </motion.h2>
          </div>
        </div>
        <SliderButtons right={"/competences"} />
      </motion.div>
    </div>
  );
};

export default Home;
