/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import logi from '../assets/logi-mockup-narrow.png';

import cookbooked from '../assets/cookbooked-mockup.png';
import meetup from '../assets/meetup-mockup-dev.png';

import NavBar from './NavBar';
import Footer from './Footer';

function Logitech({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  useEffect(() => {
    setCurrPage('');
    window.scrollTo(0, 0);
    document.title = 'Logitech | Sylvia Zhao';
  }, []);

  const navigate = useNavigate();

  const goToProject = (name) => {
    if (name === 'cookbooked') {
      navigate('/cookbooked');
    } else if (name === 'meetup') {
      navigate('/meetup');
    }
  };

  return (
    <div className="Logitech">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">
          Logitech Design Ops
        </div>
        <div className="project-info">Summer 2022 internship reflections</div>
        <img className="project-img" src={logi} alt="logi mockup" />
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header-less" id="overview">Overview</div>
            <div className="project-ltext-zero">
              I interned with Logitech&apos;s Design Operations team throughout
              summer 2022 to support the processes of the company&apos;s design
              teams through project management platform administration and
              training material creation.
              <br />
              <br />
              For my main project, I was tasked with redesigning and implementing
              8 pages in Logitech&apos;s internal network platform. The goal of this project
              was to help design teams and stakeholders better understand Design Operations&apos;
              services and to provide key resources for contacting Design Operations for
              projects. I interviewed employees within the operations sub-teams for content,
              and mockups for the final pages were created in Figma before being
              implemented using HTML and CSS.
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="stage-wrap">
                <div className="subsection-rheader-small">
                  ROLE
                </div>
                <div className="project-rtext">
                  Design Operations Intern
                </div>
              </div>
            </div>
            <div className="descrip-rflex-zero">
              <div className="subsection-rheader">
                DATES
              </div>
              <div className="project-rtext">
                12 weeks
                <br />
                (June - August 2022)
              </div>
            </div>
          </div>
        </div>
        <div className="section-header-less">
          Reflections
        </div>
        <div className="project-text">
          Interning with Design Operations provided valuable exposure to how
          design teams manage their workflows to ensure efficient, successful
          projects. My intern project taught me how to work with various
          types of teams within a design organization along with how to
          be more thoughtful of how design can facilitate the presentation
          of information/resources to different audiences.
        </div>
        <div className="subsection-header-bot">
          EXPLORE PROJECTS
        </div>
        <div className="grid-row">
          <div className="gcard-lwrap" onClick={() => goToProject('cookbooked')}>
            <img className="grid-img" src={cookbooked} alt="cookbooked mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                CookBooked
              </div>
              <div className="gcard-text">
                Innovating on digital recipe interactions
              </div>
            </div>
          </div>
          <div className="gcard-rwrap" onClick={() => goToProject('meetup')}>
            <img className="grid-img" src={meetup} alt="meetup mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Meetup
              </div>
              <div className="gcard-text">
                Improving group meeting scheduling on mobile & web
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logitech;