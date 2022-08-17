import React from 'react'

const Skills = ({habilities, clase}) => {
  return (
    <div className={clase}>
      <h2>Habilidades:</h2>
      {habilities.map( value => { return (        
          <h4 key={value}>{value}</h4>
              
        )})}
    </div>
  )
}

export default Skills