/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import illustration from '../assets/landing-illustration.png';
import Arrow from '../assets/arrow.svg';
import mockup from '../assets/temp-mockup.png';
import NavBar from './NavBar';

function Home({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
  const navigate = useNavigate();

  console.log(currPage);

  const goToProject = (name) => {
    if (name === 'meetup') {
      navigate('/meetup');
    }
  };

  const footerMessage = 'Made by Sylvia <3';

  useEffect(() => {
    setCurrPage('home');
  }, []);

  return (
    <div className="Home">
      <NavBar currPage={currPage} />
      <div className="landing">
        <div className="big-header">
          Hi, I&apos;m Sylvia Zhao
        </div>
        <div className="paragraph">
          UI/UX & Visual Designer. Student in Cognitive & Computer Science at UPenn.
          <br />
          Designing for PennApps & Wharton MUSE. Recent PM Intern for Logitech Design Ops.
        </div>
        <img id="home-illus" src={illustration} alt="landing illustration" />
      </div>
      <a href="#work">
        <img id="arrow" src={Arrow} alt="landing illustration" />
      </a>
      <div id="work">Work</div>
      <div className="grid">
        <div className="grid-row">
          <div className="gcard-lwrap">
            <img className="grid-img" src={mockup} alt="temp mockup" onClick={goToProject('meetup')}/>
            <div className="gcard-label" onClick={goToProject('meetup')}>
              <div className="gcard-heading">
                Meetup
              </div>
              <div className="gcard-text">
                How might we streamline the process of scheduling group meetings?
              </div>
            </div>
          </div>
          <div className="gcard-rwrap">
            <img className="grid-img" src={mockup} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                PennInTouch
              </div>
              <div className="gcard-text">
                How might we streamline the process of scheduling group meetings?
              </div>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div className="gcard-lwrap">
            <img className="grid-img" src={mockup} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Meetup
              </div>
              <div className="gcard-text">
                How might we streamline the process of scheduling group meetings?
              </div>
            </div>
          </div>
          <div className="gcard-rwrap">
            <img className="grid-img" src={mockup} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                PennInTouch
              </div>
              <div className="gcard-text">
                How might we streamline the process of scheduling group meetings?
              </div>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div className="gcard-lwrap">
            <img className="grid-img" src={mockup} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Meetup
              </div>
              <div className="gcard-text">
                How might we streamline the process of scheduling group meetings?
              </div>
            </div>
          </div>
          <div className="gcard-rwrap">
            <img className="grid-img" src={mockup} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                PennInTouch
              </div>
              <div className="gcard-text">
                How might we streamline the process of scheduling group meetings?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        {footerMessage}
      </div>
    </div>
    // <button className="button" type="button" onClick={goToProject}>View my work</button>
    // TODO: ADD FLOATING CARAT ARROW
  );
}

export default Home;
