import './App.css';
import Image from './components/Image/Image';
import Profile from './components/Profile/Profile';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Other from './components/Other/Other';
import { CV } from './CV/Cv.js';
import { useState } from 'react';
import Skills from './components/Skills/Skills';
import Languages from './components/Languages/Languages';


const {hero, education, experience, languages, habilities, achievements, other_competencies} = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true); 
  const [showOthers, setShowOthers] = useState(true);

  return (
    <div className="App">
      <Image 
      source='https://i.etsystatic.com/28337381/r/il/470e01/4059732910/il_794xN.4059732910_pe64.jpg' 
      alternative={'Foto de ' + hero.name + ' ' + hero.surname}
      />
      
      <Profile 
      name={hero.name + ' ' + hero.surname} 
      description={hero.description}  
      />

      <div className='buttons'>
      <button onClick={() => setShowEducation(true)}>Educacion</button>
      <button onClick={() => setShowEducation(false)}>Experience</button>
      </div>
      { showEducation ? <Education education={education} clase={showOthers ? 'Changer' :'Changer--activate'} /> : <Experience experience={experience} clase={showOthers ? 'Changer' : 'Changer--activate'} />}      
      
      { showOthers ? <button className='mas_info' onClick={() => setShowOthers(false)}>?</button> : <button className='mas_info--activate' onClick={() => setShowOthers(true)}>!</button>}

      <Other 
      other={other_competencies}
      clase={showOthers ? 'Other hidden' : 'Other'} />

      <div className='sk-lang'>
        <Skills habilities={habilities} clase='sk'/>

        <Languages languages={languages} clase='lg'/>

      </div>

    </div>
  )
};

export default App
