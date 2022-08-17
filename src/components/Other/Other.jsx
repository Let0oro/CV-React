import React from 'react';
import './Other.css'

const Other = ({other, clase}) => {


  return (
    <div className={clase} >
        <h2>Otros:</h2>
        {other.map( value => { return (
          <div className='Other__Container' key={value.name}>
            
            <h3>{value.name}</h3>
              <span>{value.place}</span>
              <span>{value.level}</span>
              <span>{value.reason}</span>
          </div>
          
        )})}
    </div>
  )
}

export default Other