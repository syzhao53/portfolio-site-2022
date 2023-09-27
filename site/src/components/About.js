/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import headshot from '../assets/headshot.png';
import linkedin from '../assets/linkedin-icon.svg';
import download from '../assets/download-icon.svg';
import email from '../assets/email-icon.svg';
import NavBar from './NavBar';
import Footer from './Footer';

function About({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  useEffect(() => {
    setCurrPage('about');
    window.scrollTo(0, 0);
    document.title = 'About | Sylvia Zhao';
  }, []);

  return (
    <div className="About">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">
          About
        </div>
        {/* <img className="project-img" src={headshot} alt="headshot" /> */}
        <div id="about-flex">
          <img id="headshot" src={headshot} alt="headshot" />
          <div className="about-rflex">
            <div className="project-text">
              Hi! I&apos;m a UX and visual designer based in the Dallas-Fort Worth area.
              I&apos;m currently a UX Design Analyst at JPMorgan Chase as part of the Design
              Development Program. Previously, I have worked on web experiences for Design
              Operations
              at Logitech and have also created app and marketing assets for startups.
              <br />
              <br />
              As a designer, I&apos;m interested in how people connect with technology
              to create meaningful, delightful experiences and how psychology impacts these
              interactions.
            </div>
            <div>
              {/* <div className="subsection-header">CONTACT</div> */}
              <div id="contact-card">
                <div className="project-text">
                  <a id="about-link" href="mailto:syzhaosyz@gmail.com">
                    <img className="about-icon-small" src={email} alt="email icon" />
                    syzhaosyz@gmail.com
                  </a>
                  <a id="about-link" href="sylviazhaoresume.pdf" download="SylviaZhao-Resume">
                    <img className="about-icon-small" src={download} alt="download icon" />
                    Resume
                  </a>
                  <a id="about-link" href="https://www.linkedin.com/in/sylvia-zhao/">
                    <img className="about-icon" src={linkedin} alt="linkedin icon" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default About;
