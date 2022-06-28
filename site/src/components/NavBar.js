/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
// import leaf from '../assets/leaf.png';

function NavBar({ currPage }) {
  const navigate = useNavigate();

  // TODO: ADD PROP AT APP LEVEL TO TRACK CURRENT PAGE TO ADD STYLING
  console.log(currPage);

  return (
    <div className="NavBar">
      <div className="nav-row">
        {/* <img id="leaf-icon" src={leaf} alt="leaf icon" /> */}
        <button
          type="button"
          className={currPage === 'work' ? 'nav-button-bold' : 'nav-button'}
          onClick={async () => {
            navigate('/');
          }}
        >
          WORK
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
