import React from 'react';
import profileimage from '../HomeComponents/profileimage.jpg';
import { FaPlus } from "react-icons/fa6";
function Connections_short(props) {
  return (
    <>
        <div className='connections_short'>
            <div className='d-flex'>
                <div className='image-d'>
                    <div className='image-d-vc' style={{width: "55px"}}>
                        <img src={props.empimage} style={{width: "88%"}} alt='left'/>
                    </div>
                </div>
                <div className='connections-bio'>
                    <h6 className='mb-0'> {props.name} </h6>
                    <p className='mb-2'> <span> {props.subskills} </span></p>
                    <button className='btn btn-my-cls'> <FaPlus/> Follow </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Connections_short