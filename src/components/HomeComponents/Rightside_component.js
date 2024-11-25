import React from 'react'
import Connections_short from '../Connections/Connections_short'
import { BsInfoSquareFill } from "react-icons/bs";
import Image1  from '../Connections/image-1.jpg';
import Image2  from '../Connections/image-2.jpg';



function Rightside_component() {
  return (
    <>
      <div className='add-to-your-feed-d bg-white p-3'>
        <ul className='d-flex justify-content-between align-items-center p-0'>
          <li> <h6 className='mb-0'>Add to your feed</h6> </li>
          <li> <BsInfoSquareFill style={{fontSize: "12px"}} /></li>
        </ul>
          <div className='connections-d'>
            <Connections_short  name="Hafsa Ahsan" subskills="HR Generalist || HR Executive || Talent Acquisition|| Recruiter" empimage={Image2} />
            <Connections_short name="Ram Maheshwari" subskills="150K+ | Open To Collaborations & Opportunities | Web Developer | HTML" empimage={Image1} />
            <Connections_short  name="Hafsa Ahsan" subskills="HR Generalist || HR Executive || Talent Acquisition|| Recruiter" empimage={Image2} />
            <Connections_short name="Ram Maheshwari" subskills="150K+ | Open To Collaborations & Opportunities | Web Developer | HTML" empimage={Image1} />
          </div>
      </div>
    </>
  )
}

export default Rightside_component