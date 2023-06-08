import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import {FaAlignLeft,FaCaretDown,FaUserCircle} from 'react-icons/fa'
import Logo from './Logo'
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar ,clearStore} from '../features/user/userSlice';

const Navbar = () => {

  const [showLogout,setshowLogout]=useState(false);
  const {user}=useSelector((store)=>store.user)
  const dispatch=useDispatch();

  const toggle=()=>{
    dispatch(toggleSidebar())
  }

  return (
    <Wrapper>
      <div className="nav-center">
        <button 
          type='button' 
          className='toggle-btn'
          onClick={toggle}>
        <FaAlignLeft/>
        </button>
        <div>
          <Logo/>
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button 
            className="btn" 
            type='button'
            onClick={()=>setshowLogout(!showLogout)}>
              <FaUserCircle/>
              {user?.name}
              <FaCaretDown/>
            </button>
             <div className={`${showLogout?"show-dropdown":"dropdown"}`}>
              <button
                type='button'
                className='dropdown-btn'
                onClick={()=>dispatch(clearStore('Logging out...'))}
              >
               Logout
              </button>
             </div>

        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
