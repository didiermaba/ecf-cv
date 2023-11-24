import React from "react";

const Skills = () => {
  const skill = [
    { skil: "HTML", val: "100%", ariaValuenow: "100" },
    { skil: "CSS", val: "90%", ariaValuenow: "90" },
    { skil: "JavaScript", val: "75%", ariaValuenow: "75" },
    { skil: "React", val: "70%", ariaValuenow: "70" },
  ];
  const skill2 = [
    { skil: "PHP", val: "80%", ariaValuenow: "80" },
    { skil: "PrestaShop/WordPress", val: "90%", ariaValuenow: "90" },
    { skil: "Symfony", val: "70%", ariaValuenow: "70" },
  ];

  return (
    <div className="compet">
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2></h2>  
          </div>
          <br /><br /><br />

          <div className="row skills-content">
            {skill.map((item, index) => (
              <div className="">
                <div key={index} className="progress">
                  <span className="skill">
                    {item.skil}
                    <i className="val">{item.val}</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={item.ariaValuenow}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            ))}

            {skill2.map((item, index) => (
              <div className="col-lg-6">
                <div key={index} className="progress">
                  <span className="skill">
                    {item.skil} <i className="val">{item.val}</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={item.ariaValuenow}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
