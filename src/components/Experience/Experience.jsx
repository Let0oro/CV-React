import React from 'react';
import './Experience.css';

const Experience = ({experience, clase}) => {
  return (
    <div className={clase}>
    <h2>Experiencia:</h2>
      {experience.map( value => { return (
        <div className='Experience__container' key={value.name}>
          
          <h3>{value.name}</h3>
            <span>{value.date}</span>
            <span>{value.place}</span>
        
        </div>
        
      )})}
  </div>
  )
}

export default Experience