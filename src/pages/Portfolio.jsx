import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetWork from "../components/SocialNetWork";
import SliderButtons from "../components/SliderButtons";
import {projectsData} from "../components/data/projectsData"
import "../styles/portfolio.css"
import { motion } from "framer-motion";

const Portfolio = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // Utilisation de useState pour gérer l'index du projet actuel
  const currentProject = projectsData[currentProjectIndex]; // Récupération du projet actuel en utilisant l'index
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();
  const [plusMinus, setPlusMinus] = useState();


  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
    
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
      y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  
  return (
    <div className="elt">
      <Mouse />
      <Navigation />
      <div className="home">
        <SocialNetWork />
        <SliderButtons left={"/competences"} right={"/contact"} />

        <div className="project"> 
          {projectsData.map((project, currentProjectIndex) => (
            <motion.div
            className="project-main"
            initial="initial"
            animate="visible"
            exit="exit"
            transition={transition}
            variants={variants}
            key={currentProjectIndex}
          >
            <div className="project-content">
              <h1>{project.title}</h1>
              <p>{project.date}</p>
              <ul className="languages">
                {project.languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <motion.div
              initial="initial"
              animate="visible"
              variants={imgAnim}
              transition={{ duration: 1.2 }}
              className="img-content"
            >
              <div className="img-container hover">
                <span>
                  <h3>{project.title}</h3>
                  <p>{project.infos}</p>
                </span>
                <img
                  src={project.img}
                  alt={project.title}
                  className="img"
                />
              </div>
              <div className="button-container">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover"
                >
                  <span className="button">Visitez le site</span>
                </a>
              </div>
            </motion.div>
            <span className="random-circle" style={{ left, top, transform: size }}>
              {/* cela peut aussi s'écrire:  style={{ left: left, top: top, transform: size }}>  */}
            </span>
          </motion.div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
