/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */
import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import illustration from '../assets/landing-illustration.png';
import Arrow from '../assets/arrow.svg';
import Heart from '../assets/heart.svg';
import meetup from '../assets/meetup-mockup (2).png';
import pennintouch from '../assets/pennintouch-mockup.png';
import speechconnect from '../assets/speechconnect-mockup.png';
import chapter from '../assets/chapter-mockup.png';
import cookbooked from '../assets/chapter-mockup.png';
import chase from '../assets/chase-mockup.png';
import pennapps from '../assets/pennapps-mockup.png';
import icecream from '../assets/ice-cream.png';
import logi from '../assets/logi-mockup.png';
import temp from '../assets/temp-mockup.png';
import NavBar from './NavBar';
import LandingLight from './LandingLight';
import Footer from './Footer';

function Home({ currPage, setCurrPage, theme, setTheme }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
  const navigate = useNavigate();

  const goToProject = (name) => {
    if (name === 'meetup') {
      navigate('/meetup');
    } else if (name === 'pennintouch') {
      navigate('/pennintouch');
    } else if (name === 'speechconnect') {
      navigate('/speechconnect');
    } else if (name === 'logitech') {
      navigate('/logitech');
    } else if (name === 'chapter') {
      navigate('/chapter');
    } else if (name === 'cookbooked') {
      navigate('/cookbooked');
    } else if (name === 'illustrations') {
      navigate('/illustrations');
    } else if (name === 'chase') {
      navigate('/chase');
    }
  };

  const footerMessage = 'Made by Sylvia';

  useEffect(() => {
    setCurrPage('work');
    window.scrollTo(0, 0);
    document.title = 'Sylvia Zhao';
    console.log(theme);
    if (theme == 'dark') {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "red";
    }
  }, []);

  return (
    <div className="Home" id="home">
      <NavBar currPage={currPage} />
      <div className="landing" id="landing">
        <div className="big-header">
          HI, I&apos;M SYLVIA ZHAO
        </div>
        <div className="paragraph">
          UX & Visual Designer &middot; UX Design Analyst @ JPMorgan Chase & Co.
          <br />
          UPenn Cognitive Science & Computer Science graduate
        </div>
        <img id="home-illus" src={illustration} alt="landing illustration" />
        {/* <LandingLight theme={theme} setTheme={setTheme}/> */}
        <img id="home-illus-dark" className="home-illus-dark-show" src={illustration} alt="landing illustration" />
        <Link to="/#work">
          <img id="arrow" src={Arrow} alt="arrow svg" />
        </Link>
      </div>
      {/* <a href="#work">
        <img id="arrow" src={Arrow} alt="landing illustration" />
      </a> */}
      {/* <img id="arrow" src={Arrow} alt="arrow svg" /> */}
      <div id="work">Work</div>
      <div className="grid">
      <div className="grid-row">
          <div className="gcard-lwrap" onClick={() => goToProject('chase')}>
            <img className="grid-img" src={chase} alt="chase logo mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                JPMorgan Chase & Co.
              </div>
              <div className="gcard-text">
                Chase Home Lending
              </div>
            </div>
          </div>
          <div className="gcard-rwrap" onClick={() => goToProject('meetup')}>
            <img className="grid-img" src={meetup} alt="meetup mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Cookbooked
              </div>
              <div className="gcard-text">
                Innovating on digital recipe interactions
              </div>
            </div>
          </div>
        </div>
        <div className="grid-row">
          <div className="gcard-lwrap" onClick={() => goToProject('speechconnect')}>
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
        {/* <div className="grid-row">
          <div className="gcard-lwrap"  onClick={() => goToProject('chapter')}>
            <img className="grid-img" src={chapter} alt="chapter mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Chapter
              </div>
              <div className="gcard-text">
                Designing a virtual book club experience
              </div>
            </div>
          </div>
          <div className="gcard-rwrap"  onClick={() => goToProject('pennintouch')}>
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
        </div> */}
        <div className="grid-row">
          <div className="gcard-lwrap" onClick={() => goToProject('logitech')}>
            <img className="grid-img" src={logi} alt="logi mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Logitech Design Ops
              </div>
              <div className="gcard-text">
                Summer 2022 internship reflections
              </div>
            </div>
          </div>
          <div className="gcard-rwrap" onClick={() => goToProject('illustrations')}>
            <img className="grid-img" src={icecream} alt="pennapps mockup" />
            <div className="gcard-label">
              <div className="gcard-heading">
                Illustrations
              </div>
              <div className="gcard-text">
                Work for personal projects, clubs, & more
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    // <button className="button" type="button" onClick={goToProject}>View my work</button>
    // TODO: ADD FLOATING CARAT ARROW
  );
}

export default Home;
