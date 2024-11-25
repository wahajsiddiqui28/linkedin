import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import profileimage from './HomeComponents/profileimage.jpg';

function Header() {
  return (
    <>
    <header className='bg-white'>
      <div className='container'>
        <nav className="navbar navbar-expand-lg pb-0 pt-0">
            <div className="container-fluid p-0">
               <div className='header-logo'>
                <NavLink className="navbar-brand m-0" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" focusable="false">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                  </NavLink>
               </div>
               <div className="d-flex justify-content-center align-items-center mx-1">
                  <div className="custom-search-input">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="search-small"> 
                      <use href="#search-small" width="16" height="16"></use>
                  </svg>
                      <input type="text" placeholder="Search" />
                  </div>
              </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item active text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                          <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                        </svg>
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                          </svg>
                        <NavLink className="nav-link" to="/mynetwork">My Network</NavLink>
                        </li>
                        <li className="nav-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                          <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                        </svg>
                        <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                        </li>
                        <li className="nav-item">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                          </svg>
                        <NavLink className="nav-link" to="/messages">Messeging</NavLink>
                        </li>
                        <li className="nav-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                          <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                        </svg>
                        <NavLink className="nav-link" to="/notification">Notification</NavLink>
                        </li>
                        <li className='px-4' style={{borderRight: "1px solid #e8e8e8"}}>
                        <div className="dropdown">
                            <a href="#" className="text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <div>
                                <img src={profileimage} alt="mdo" width="24" height="24" className="rounded-circle"/>
                                {/* <img src={profileimage} alt='left'  /> */}
                              </div>
                              <span>Me</span>
                            </a>
                            <ul className="dropdown-menu text-small shadow">
                              <li><a className="dropdown-item" href="#">New project...</a></li>
                              <li><a className="dropdown-item" href="#">Settings</a></li>
                              <li><a className="dropdown-item" href="#">Profile</a></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className='text-center' style={{paddingLeft: "20px", paddingRight: "20px"}}>
                        <div className="dropdown">
                            <a href="#" className="text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <div>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                              </svg>
                              </div>
                              <span>For Business</span>
                            </a>
                            <ul className="dropdown-menu text-small shadow">
                              <li><a className="dropdown-item" href="#">New project...</a></li>
                              <li><a className="dropdown-item" href="#">Settings</a></li>
                              <li><a className="dropdown-item" href="#">Profile</a></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className='text-center'>
                              <div>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                <path d="M12 17.13a5.13 5.13 0 010-10.25V4a8 8 0 108 8h-2.87A5.13 5.13 0 0112 17.13z" style={{isolation: "isolate"}} opacity=".75"></path>
                                <path d="M23.31 6.34l-4.95-.71-.7-4.94-3.54 3.53.35 2.48-3.89 3.89a2 2 0 002.83 2.83l3.89-3.89 2.48.35z"></path>
                              </svg>
                              </div>
                              <span style={{fontSize: "13px", color: "#666666"}}>Advertise</span>
                        </li>
                    </ul>
                    
                  </div>
              </div>
            </nav>
          </div>
        </header>
    </>
  );
}

export default Header;
