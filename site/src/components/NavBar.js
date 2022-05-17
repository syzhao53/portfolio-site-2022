/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="NavBar">
      <button
        type="button"
        className="nav-button"
        onClick={async () => {
          navigate('/');
        }}
      >
        HOME
      </button>
      <button
        type="button"
        className="nav-button"
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
