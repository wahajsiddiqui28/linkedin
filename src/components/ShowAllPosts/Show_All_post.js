import React from 'react'
import Connections_short from '../Connections/Connections_short'
import Image2  from '../Connections/image-1.jpg';
import { FaPlus } from 'react-icons/fa6';
import Styled from 'styled-components';

function Show_All_post() {

    const Stylediv = Styled.div `
        border-radius: 8px;
    `;
    const Styleddiv = Styled.div `
        display: flex;
        justify-content: space-between;
    `;


  return (
    <>
        <Stylediv className='show-all-posts bg-white p-3'>
            <div className='show-all-posts-vc'>
                <div className='show-all-posts-vc-inner'>
                    <Styleddiv className=''>
                        <div className=' logo-and-bios'>
                                <img src={Image2} style={{width: '15%', borderRadius: '50%'}} />
                            <div className='mx-3 d-inline-block'>
                                <h6 className='display-inline'>Informative Engineering</h6>
                                <p> <span>286,634 followers</span> </p>
                            </div>
                        </div>
                        <div className=''>
                            <button className='btn btn-my-cls' style={{background: "none", border: "none", color: "#004182"}}> <FaPlus/> Follow </button>
                        </div>
                    </Styleddiv>
                </div>
            </div>
        </Stylediv>
    </>
  )
}

export default Show_All_post