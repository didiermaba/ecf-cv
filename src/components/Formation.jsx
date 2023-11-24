import React from 'react';
import "../styles/formation.css"

const Formation = () => {
    const Formation = [
        {
          level: "Titre Professionnel Concepteur Développeur d'Application",
          year: "Encours",
          society: "Prepavenir Formation - Franconville",
         
        },
        {
          level: "Titre Professionnel Développeur Web Web Mobile",
          year: "Mai 2023",
          society: "M2I Formation - Paris",
         
        },
        {
          level: "Master Administration des affaires et sciences économiques",
          year: "Juin 2008",
          society: "Université Protestante au Congo",
         
        },
       
      ];
    return (
        <div className='formation'>
        <h1 className="form-title">Formation</h1>
          {Formation.map((item, index) => (
            <div key={index} className="form-item">
              <h4>{item.level}</h4>
              <h5>{item.year}</h5>
              <p>
                <em>{item.society}</em>
              </p>
            </div>
          ))}
        
    </div>
);
};

export default Formation;