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
        <img className="project-img" src={meetup} alt="meetup mockup" />
        <div className="section-header">Overview</div>
        <div className="project-text">
          Having used many meeting and event
          scheduling apps throughout my time as a student, I was curious to see
          how an experience could be reimagined to be more efficient and
          usable. I chose to create a site that would address the process of
          scheduling a group meeting. For the sake of scope, this project only
          focuses on the side
          where someone receives an invitation to a meeting and has to provide their availability.
          <br />
          <br />
          This project drew inspiration from the issues of the popular scheduling platform
          “when2meet.” As found in user research, when2meet provides an convenient method
          for schedulers to gather group availability, but the platform has poor usability.
          Let&apos;s Meet attempts to incorporate the positive functionality of when2meet
          while addressing usability, particularly on mobile.
        </div>
      </div>
      {/* <div className="footer">{footerMessage}</div> */}
    </div>
    // <button className="button" type="button" onClick={goToProject}>View my work</button>
    // TODO: ADD FLOATING CARAT ARROW
  );
}

export default Meetup;
