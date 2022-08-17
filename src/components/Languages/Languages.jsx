import React from 'react'

const Languages = ({languages, clase}) => {
  return (
    <div className={clase}>
      <h2>Idiomas:</h2>
      {languages.map( value => { return (
        <div className='Experience__container' key={value.language}>
          
          <h3>{value.language}</h3>
            <span>Write: {value.wrlevel}</span>
            <span>Spell: {value.splevel}</span>
        
        </div>
      
      )})}
    </div>
  )
}

export default Languages