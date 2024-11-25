import React from 'react';
import coverimage from './cover.svg';
import profileimage from './profileimage.jpg';
function Leftside_component() {
  return (
    <>
      <div className='left-sid bg-white'>
        <div className='cover-image'>
          <img src={coverimage}  />
          <div className='profile-image text-center'>
            <img src={profileimage} alt='left'  />
          </div>
        </div>
        <div className=' p-3'>
            <div className='text-center'>
              <div className='emp-title'>
                <h6>Wahaj Siddiqui (Mr Coder)</h6>
              </div>
              <div className='emp-skill'>
                  <p> <span>Frontend Developer - WordPress Developer (PHP + React.js + WordPress) , Remote Developer | #remotedeveloper #developer | Frontend: | HTML | CSS | JavaScript | Reactjs | Bootstrap | Tailwind | PHP | Laravel-Frontend |</span> </p>
              </div>
            </div>
            <div>
            <div className='emp-skill'>
                <div className='d-flex justify-content-between'>
                  <p> <storage>Profile viewers </storage> </p>
                  <p> <span>69 </span> </p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p> <storage>Post impressions</storage> </p>
                  <p> <span>52 </span> </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Leftside_component 
