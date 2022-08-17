import React from 'react';
import './Profile.css';

const Profile = ({name, description}) => {


  return (
    <div className='Profile'>
        <h1>{name}</h1>
        <h3>{description}</h3>
    </div>
  )
}

export default Profile