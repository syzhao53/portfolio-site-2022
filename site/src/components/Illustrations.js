/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import sushi from '../assets/sushi.png';
import marcy from '../assets/marcy.png';
import icecream from '../assets/ice-cream.png';
import florist from '../assets/florist.png';
import staticlanding from '../assets/static-site-landing.png';
import pennapps from '../assets/pennapps-mockup.png';
import shea from '../assets/shea-butter.png';
import reishi from '../assets/reishi-mushroom.png';
// import burgundylady from '../assets/burgundy-lady.png';
// import comfyfarm from '../assets/comfy-farm.png';

import meetup from '../assets/meetup-mockup-dev.png';
import speechconnect from '../assets/speechconnect-mockup.png';

import NavBar from './NavBar';
import Footer from './Footer';

function Illustrations({ currPage, setCurrPage }) {
//   const navigate = useNavigate();

  useEffect(() => {
    setCurrPage('');
    window.scrollTo(0, 0);
    document.title = 'Illustrations | Sylvia Zhao';
  }, []);

  const navigate = useNavigate();

  const goToProject = (name) => {
    if (name === 'meetup') {
      navigate('/meetup');
    } else if (name === 'speechconnect') {
      navigate('/speechconnect');
    }
  };

  return (
    <div className="Illustrations">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">
          Illustrations
        </div>
        <div className="project-info">
          Work for web designs, personal projects, & more
        </div>
        <img className="misc-img" src={icecream} alt="ice cream illustration" />
        <div className="misc-img-wrap">
          <img className="misc-img-lsmall" src={sushi} alt="sushi illustration" />
          <img className="misc-img-rsmall" src={marcy} alt="marcy illustration" />
        </div>
        <img className="misc-img" src={florist} alt="florist illustration" />
        <div className="img-wrap">
          <img className="misc-img" src={staticlanding} alt="pennapps static site landing illustration" />
          {/* <div className="caption">(In collaboration with Mia Kim)</div> */}
        </div>
        <img className="misc-img" src={pennapps} alt="pennapps static site small illustrations" />
        <div className="misc-img-wrap">
          <img className="misc-img-lsmall" src={shea} alt="shea butter illustration" />
          <img className="misc-img-rsmall" src={reishi} alt="reishi mushroom illustration" />
        </div>
        {/* <img className="misc-img" src={comfyfarm} alt="comfy farm illustration" />
        <img className="misc-img" src={burgundylady} alt="burgundy lady illustration" /> */}
      </div>
      <div className="project-wrap">
        <div className="subsection-header-bot">
          OTHER PROJECTS
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
      </div>
      <Footer />
    </div>
  );
}

export default Illustrations;
