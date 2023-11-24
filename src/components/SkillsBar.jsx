import React, { useState } from "react";

const SkillsBar = () => {
  const [skill] = useState([
    { skill: "HTML",percentage: 80, tooltip: "80%" },
    { skill: "CSS", percentage: 60, tooltip: "60%" },
    { skill: "JAVASCRIPT", percentage: 70, tooltip: "70%" },
    { skill: "REACT", percentage: 70, tooltip: "70%" },
    { skill: "JQUERY", percentage: 70, tooltip: "70%" },
    { skill: "BOOSTRAP", percentage: 60, tooltip: "60%" },
    { skill: "MATERIAL UI", percentage: 70, tooltip: "70%" },
]);
  const skill2 = [
    { skill: "PRESTASHOP", percentage: 60, tooltip: "60%" },
    { skill: "WORDPRESS", percentage: 60, tooltip: "60%" },
    { skill: "PHP", percentage: 80, tooltip: "80%" },
    { skill: "SYMFONY", percentage: 70, tooltip: "70%" },
    { skill: "NODEJS", percentage: 70, tooltip: "70%" },
    { skill: "MYSQL", percentage: 85, tooltip: "85%" },
    { skill: "GIT", percentage: 70, tooltip: "70%" },
];
  
  return (
    <div>
      <div className="contenaire">
        <h1 className="title-text">Technologies</h1>

        <div className="skillsContenaire">
          <div className="box front">
            {skill.map((item, index) => (
              <div key={index} className="skill-box">
                <span className="title">{item.skill}</span>
                <div className="skill-bar">
                  <span
                    className={`skill-per ${item.skill.toLowerCase()}`}
                    style={{ width: `${item.percentage}%` }}
                  >
                   <span className="tooltip">{`${item.percentage}%`}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="box back">
            {skill2.map((item, index) => (
              <div key={index} className="skill-box">
                <span className="title">{item.skill}</span>
                <div className="skill-bar">
                  <span
                    className={`skill-per ${item.skill.toLowerCase()}`}
                    style={{ width: `${item.percentage}%` }}
                  >
                    <span className="tooltip">{item.tooltip}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBar;
