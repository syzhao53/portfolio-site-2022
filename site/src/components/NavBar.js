/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import Hamburger from '../assets/hamburger.svg';

import leaf from '../assets/leaf.png';

function NavBar({ currPage }) {
  const [menuToggled, setMenuToggled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuToggled(!menuToggled);
  };

  const accountOptions = (
    <div className="acct-options" style={{ display: menuToggled ? 'flex' : 'none' }}>
      <button
        type="button"
        className={currPage === 'work' ? 'nav-button-bold' : 'nav-button'}
        onClick={async () => {
          navigate('/');
        }}
      >
        WORK
      </button>
    </div>
  );

  // const accountOptions = (
  //   <div
  //     className="acct-options"
  //     style={{ display: accountToggled ? 'flex' : 'none' }}
  //   >
  //     <button
  //       type="button"
  //       className="account-btn"
  //       onClick={editProfile}
  //     >
  //       EDIT PROFILE
  //     </button>
  //     <button
  //       type="button"
  //       className="account-btn"
  //       onClick={async () => { console.log('go to delete account'); navigate('/delete-account', { user, setUser }); }}
  //     >
  //       DELETE ACCOUNT
  //     </button>
  //     <button
  //       type="button"
  //       className="logout-btn"
  //       onClick={async () => { navigate('/', { user, setUser }); }}
  //     >
  //       LOGOUT
  //     </button>
  //   </div>
  // );

  return (
    <div className="NavBar">
      <div className="mobile-nav">
        <div className="mobile-nav-row">
          <img id="hamburger" src={Hamburger} alt="hamburger menu" onClick={async () => toggleMenu()} />
          {accountOptions}
        </div>
      </div>
      <div className="nav-row">
        <img id="leaf-icon" src={leaf} alt="leaf icon" />
        <div className="logo-text">SZ</div>
        <button
          type="button"
          className="nav-button"
          onClick={async () => {
            navigate('/project');
          }}
        >
          CONTACT
        </button>
        <button
          type="button"
          className={currPage === 'project' ? 'nav-button-bold' : 'nav-button'}
          onClick={async () => {
            navigate('/project');
          }}
        >
          RESUME
        </button>
        <button
          type="button"
          className={currPage === 'work' ? 'nav-button-bold' : 'nav-button'}
          onClick={async () => {
            navigate('/');
          }}
        >
          WORK
        </button>
      </div>
    </div>
    // <div className="NavBar">
    //   <button
    //     type="button"
    //     className={currPage === 'work' ? 'nav-button-bold' : 'nav-button'}
    //     onClick={async () => {
    //       navigate('/');
    //     }}
    //   >
    //     WORK
    //   </button>
    //   <button
    //     type="button"
    //     className={currPage === 'project' ? 'nav-button-bold' : 'nav-button'}
    //     onClick={async () => {
    //       navigate('/project');
    //     }}
    //   >
    //     RESUME
    //   </button>
    //   <button
    //     type="button"
    //     className="nav-button"
    //     onClick={async () => {
    //       navigate('/project');
    //     }}
    //   >
    //     CONTACT
    //   </button>
    // </div>
  );
}

export default NavBar;
