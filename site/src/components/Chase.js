/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import chase from '../assets/chase-mockup-narrow.png';

import cookbooked from '../assets/cookbooked-mockup.png';
import speechconnect from '../assets/speechconnect-mockup.png';

import NavBar from './NavBar';
import Footer from './Footer';

function Chase({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  useEffect(() => {
    setCurrPage('');
    window.scrollTo(0, 0);
    document.title = 'Chase | Sylvia Zhao';
  }, []);

  const navigate = useNavigate();

  const goToProject = (name) => {
    if (name === 'cookbooked') {
      navigate('/cookbooked');
    } else if (name === 'speechconnect') {
      navigate('/speechconnect');
    }
  };

  return (
    <div className="Chase">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">
          JPMorgan Chase & Co.
        </div>
        <div className="project-info">Chase Home Lending</div>
        <img className="project-img" src={chase} alt="chase mockup" />
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header-less" id="overview">Overview</div>
            <div className="project-ltext-zero">
              Designing experiences in the Chase Home Lending team
              to support mortgage loan officers throughout the home loan process.
              Includes web, mobile, and customer communications designs.
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="stage-wrap">
                <div className="subsection-rheader-small">
                  ROLE
                </div>
                <div className="project-rtext">
                  UX Designer (Analyst in Design Development Program)
                </div>
              </div>
            </div>
            <div className="descrip-rflex-zero">
              <div className="subsection-rheader">
                DATES
              </div>
              <div className="project-rtext">
                July 2023 - Present
              </div>
            </div>
          </div>
        </div>
        {/* <div className="section-header">
          Reflections
        </div>
        <div className="project-text">
          Interning with Design Operations provided valuable exposure to how
          design teams manage their workflows to ensure efficient, successful
          projects. My intern project taught me how to work with various
          types of teams within a design organization along with how to
          be more thoughtful of how design can facilitate the presentation
          of information/resources to different audiences.
        </div> */}
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
          <div className="gcard-rwrap" onClick={() => goToProject('speechconnect')}>
            <img className="grid-img" src={speechconnect} alt="speechconnect mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                SpeechConnect
              </div>
              <div className="gcard-text">
                Creating a tablet experience for alternative communication tech
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chase;
