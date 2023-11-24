import React from 'react';
import "../styles/experiencePro.css"

const ExperiencePro = () => {
    const ProfExp = [
        {
          level: "Stage Mentor Pépi-Dév M2I Formation",
          year: "Avril - Août 2023",
          society: "iKNSA, Cergy",
          tasks: [
            "Débogage",
            "Orientation des projets",
          ],
        },
        {
          level: "Stage Développeur web web mobile",
          year: "Février - Avril 2023",
          society: " M2I Formation, Paris  ",
          tasks: [
            "Développement site e-commerce",
            "Test fonctionnel",
            "Rédaction de la documentation technique",
          ],
        },
        {
          level: "Chef de réception",
          year: "2016 - 2022",
          society: "Aparthotel Adagio Access, Asnières-sur-seine ",
          tasks: [
            "Gestion de l’équipe des réceptionnistes",
            "Facturation, relance et suivi des dossiers débiteurs",
            "Gestion des réservations et de clientèle",
            "Assurer les opérations liées au check out des clients."
          ],
        },
      ];

    return (
        <div className='experience'>
            <h1 className="expe-title">Expérience professionelle</h1>
              {ProfExp.map((item, index) => (
                <div key={index} className="expe-item">
                  <h4>{item.level}</h4>
                  <h5>{item.year}</h5>
                  <p>
                    <em>{item.society}</em>
                  </p>
                  <ul>
                    {item.tasks.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            
        </div>
    );
};

export default ExperiencePro;