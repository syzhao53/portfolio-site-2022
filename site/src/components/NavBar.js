/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';

function NavBar({ currPage }) {
  const navigate = useNavigate();

  // TODO: ADD PROP AT APP LEVEL TO TRACK CURRENT PAGE TO ADD STYLING
  console.log(currPage);

  return (
    <div className="NavBar">
      <button
        type="button"
        className={currPage === 'home' ? 'nav-button-bold' : 'nav-button'}
        onClick={async () => {
          navigate('/');
        }}
      >
        HOME
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
        className="nav-button"
        onClick={async () => {
          navigate('/project');
        }}
      >
        CONTACT
      </button>
    </div>
  );
}

export default NavBar;
