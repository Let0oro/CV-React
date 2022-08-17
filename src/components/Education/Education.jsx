import React from 'react';
import './Education.css';

const Education = ({education, clase} ) => {

  return (
    <div className={clase}>
      <h2>Educación:</h2>
        {education.map( value => { return (
          <div className='Education__container' key={value.name}>
            
            <h3>{value.name}</h3>
              <span>{value.date}</span>
              <span>{value.place}</span>
          
          </div>
          
        )})}
    </div>
  )
}

export default Education