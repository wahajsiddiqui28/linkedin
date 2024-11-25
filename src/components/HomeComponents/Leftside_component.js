import React from 'react';
import coverimage from './cover.svg';
import profileimage from './profileimage.jpg';
function Leftside_component() {
  return (
    <>
      <div className='left-sid bg-white p-3'>
        <div className='cover-image'>
          <img src={coverimage}  />
          <div className='profile-image'>
            <img src={profileimage}  />
          </div>
        </div>
        <div className='emp-title'>
          <h5>Wahaj Siddiqui (Mr Coder)</h5>
        </div>
        <div className='emp-skill'>
            <p> <span>Frontend Developer - WordPress Developer (PHP + React.js + WordPress) , Remote Developer | #remotedeveloper #developer | Frontend: | HTML | CSS | JavaScript | Reactjs | Bootstrap | Tailwind | PHP | Laravel-Frontend |</span> </p>
        </div>
      </div>
    </>
    
  )
}

export default Leftside_component 
