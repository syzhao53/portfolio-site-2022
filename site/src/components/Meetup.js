/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import meetup from '../assets/meetup-mockup.png';
import NavBar from './NavBar';

function Meetup({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  console.log(currPage);

  // const footerMessage = 'Made by Sylvia <3';

  useEffect(() => {
    setCurrPage('');
  }, []);

  return (
    <div className="Meetup">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">Meetup</div>
        <div className="project-info">Designer &middot; 2 months (2022)</div>
        <img className="grid-img" src={meetup} alt="meetup mockup" />
        <div className="section-header">Overview</div>
      </div>
      {/* <div className="footer">{footerMessage}</div> */}
    </div>
    // <button className="button" type="button" onClick={goToProject}>View my work</button>
    // TODO: ADD FLOATING CARAT ARROW
  );
}

export default Meetup;
