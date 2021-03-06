/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */
import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import illustration from '../assets/landing-illustration.png';
import Arrow from '../assets/arrow.svg';
import meetup from '../assets/meetup-mockup.png';
import pennintouch from '../assets/pennintouch-mockup.png';
import speechconnect from '../assets/speechconnect-mockup.png';
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

  const footerMessage = 'Made by Sylvia';

  useEffect(() => {
    setCurrPage('work');
    window.scrollTo(0, 0);
    document.title = 'Sylvia Zhao';
  }, []);

  return (
    <div className="Home">
      <NavBar currPage={currPage} />
      <div className="landing">
        <div className="big-header">
          HI, I&apos;M SYLVIA ZHAO
        </div>
        <div className="paragraph">
          UX & Visual Designer &middot; Senior in Cognitive & Computer Science at UPenn
          <br />
          PennApps Co-Head of Creative &middot; Recent Design Ops Intern at Logitech
        </div>
        <img id="home-illus" src={illustration} alt="landing illustration" />
      </div>
      <Link to="/#work">
        <img id="arrow" src={Arrow} alt="arrow svg" />
      </Link>
      {/* <a href="#work">
        <img id="arrow" src={Arrow} alt="landing illustration" />
      </a> */}
      {/* <img id="arrow" src={Arrow} alt="arrow svg" /> */}
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
                Redesigning UPenn&apos;s academic planning & registration site
              </div>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div className="gcard-lwrap">
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
          <div className="gcard-rwrap">
            <img className="grid-img" src={temp} alt="temp mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Chapter
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
                Logitech (Internship)
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
