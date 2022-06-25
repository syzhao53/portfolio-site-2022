/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import pennintouch from '../assets/pennintouch-mockup.png';
import generalexp from '../assets/general-exp.png';
import easeinfo from '../assets/ease-info.png';
import academicplan from '../assets/academic-plan.png';
import mocksched from '../assets/mock-sched.png';
import NavBar from './NavBar';

function PennInTouch({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  console.log(currPage);

  // const footerMessage = 'Made by Sylvia <3';

  useEffect(() => {
    setCurrPage('');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="PennInTouch">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">PennInTouch</div>
        <div className="project-info">Redesigning the University of Pennsylvania’s academic planning/registration site, PennInTouch</div>
        <img className="project-img" src={pennintouch} alt="pennintouch mockup" />
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
          while addressing usability, particularly on mobile.s
        </div>
        <div className="section-header"> User Research</div>
        <div className="subsection-header">SURVEY</div>
        <div className="project-text">
          I surveyed 16 Penn undergraduate students through Google Forms to collect data on
          users&apos; attitudes toward PennInTouch. The responses showed a generally negative
          feelings towards the platform, specifically the Academic Planning Worksheet. The
          survey also confirmed the pain point of the site being difficult to navigate.
        </div>
      </div>
      <div className="graphs">
        <div className="graphgrid-row">
          <div className="card-lgraph">
            <div className="graphcard-label">
              QUESTION 1
            </div>
            <div className="graphcard-ques">
              How do you feel about the general experience of using PennInTouch?
            </div>
            <img className="graph-img" src={generalexp} alt="general-exp graph" />
          </div>
          <div className="card-rgraph">
            <div className="graphcard-label">
              QUESTION 2
            </div>
            <div className="graphcard-ques">
              How would you rate the ease of locating information you need on PennInTouch?
            </div>
            <img className="graph-img" src={easeinfo} alt="ease-info graph" />
          </div>
        </div>
        <div className="graphgrid-row">
          <div className="card-lgraph-low">
            <div className="graphcard-label">
              QUESTION 3
            </div>
            <div className="graphcard-ques">
              How would you rate the experience of using the “Academic Planning Worksheet” feature?
            </div>
            <img className="graph-img" src={academicplan} alt="academic-plan graph" />
          </div>
          <div className="card-rgraph-low">
            <div className="graphcard-label">
              QUESTION 4
            </div>
            <div className="graphcard-ques">
              How would you rate the experience of using the “Mock Schedules” feature?
            </div>
            <img className="graph-img" src={mocksched} alt="mock-sched graph" />
          </div>
        </div>
      </div>
      {/* <div className="footer">{footerMessage}</div> */}
    </div>
    // <button className="button" type="button" onClick={goToProject}>View my work</button>
    // TODO: ADD FLOATING CARAT ARROW
  );
}

export default PennInTouch;
