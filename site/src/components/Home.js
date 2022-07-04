/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import illustration from '../assets/landing-illustration.png';
import Arrow from '../assets/arrow.svg';
import meetup from '../assets/meetup-mockup.png';
import pennintouch from '../assets/pennintouch-mockup.png';
import temp from '../assets/temp-mockup.png';
import NavBar from './NavBar';

function Home({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
  const navigate = useNavigate();

  const goToProject = (name) => {
    if (name === 'meetup') {
      navigate('/meetup');
    } else if (name === 'pennintouch') {
      navigate('/pennintouch');
    }
  };

  const footerMessage = 'Made by Sylvia <3';

  useEffect(() => {
    setCurrPage('work');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <NavBar currPage={currPage} />
      <div className="landing">
        <div className="big-header">
          Hi, I&apos;m Sylvia Zhao
        </div>
        <div className="paragraph">
          UX & Visual Designer. Student in Cognitive & Computer Science at UPenn.
          <br />
          Designing for PennApps & Wharton MUSE. Recent Design Ops Intern at Logitech.
        </div>
        <img id="home-illus" src={illustration} alt="landing illustration" />
      </div>
      {/* <a href="#work">
        <img id="arrow" src={Arrow} alt="landing illustration" />
      </a> */}
      <img id="arrow" src={Arrow} alt="landing illustration" />
      <div id="work">Work</div>
      <div className="grid">
        <div className="grid-row">
          <div className="gcard-lwrap" onClick={() => goToProject('meetup')}>
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
          <div className="gcard-rwrap" onClick={() => goToProject('pennintouch')}>
            <img className="grid-img" src={pennintouch} alt="pennintouch mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                PennInTouch
              </div>
              <div className="gcard-text">
                Redesigning the University of Pennsylvania&apos;s academic planning & registration site
              </div>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div className="gcard-lwrap">
            <img className="grid-img" src={temp} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                AAC
              </div>
              <div className="gcard-text">
                Placeholder text
              </div>
            </div>
          </div>
          <div className="gcard-rwrap">
            <img className="grid-img" src={temp} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Case Study #4
              </div>
              <div className="gcard-text">
                Placeholder text
              </div>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div className="gcard-lwrap">
            <img className="grid-img" src={temp} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Recurrent
              </div>
              <div className="gcard-text">
                Placeholder text
              </div>
            </div>
          </div>
          <div className="gcard-rwrap">
            <img className="grid-img" src={temp} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Personal Work
              </div>
              <div className="gcard-text">
                Placeholder text
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
