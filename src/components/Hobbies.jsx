import React from 'react';
import "../styles/hobbies.css"

const Hobbies = () => {
    const hobbies = [
        {
          hobby: [
            "Football",
            "Voyages"
          ]  
        }
    ]
    return (
        <div className='hobbies'>
        <h1 className="hob-title">Hobbies</h1>
          {hobbies.map((item, index) => (
            <div key={index} className="hob-item">
              <ul>
                {item.hobby.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        
    </div>
);
};

export default Hobbies;