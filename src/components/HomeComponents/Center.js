import React from 'react'
import profileimage from './profileimage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Show_All_post from '../ShowAllPosts/Show_All_post';

function Center() {


  


  return (
    <>
      <div className='post-vide-artical-component bg-white p-3 pt-1' style={{}}>
        <div>
          <div className='row align-items-center'>
            <div className='col-lg-2'>
              <div className='image-d'>
                <div className='image-d-vc'>
                  <img src={profileimage} alt='left'/>
                </div>
              </div>
            </div>
            <div className='col-lg-10'>
              <div className='start-post'>
                <div class="">
                  <input type="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Start a post, try writing with AI'/>
                </div>
              </div>
            </div>
          </div>
          <div className='post-vide-artical-icons'>
            <ul className='d-flex justify-content-between px-5 mb-0 mt-3'>
              <li><FontAwesomeIcon icon={faImage} color='#378FE9' /> Post </li>
              <li><FontAwesomeIcon icon={faYoutube} color='#5F9B41' /> Video </li>
              <li><FontAwesomeIcon icon={faNewspaper} color='#E06847' /> Writer Artical </li>
            </ul>
          </div>
        </div>
      </div>

    <div className='short-by-top py-3'>
      <div className='short-by-top-vc'>
          <p className='mb-0'> Short by: Top </p>
      </div>
    </div>

    <Show_All_post/>

    </>
  )
}

export default Center