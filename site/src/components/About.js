/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import headshot from '../assets/headshot.png';
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
          <div className="project-text">
            Hi! I&apos;m a UX and visual designer currently based in Philadelphia. I&apos;m
            a senior at the University of Pennsylvania double majoring in
            Cognitive Science
            <br />
            and Computer Science with minors in Design and Linguistics.
            <br />
            <br />
            As a designer, I&apos;m interested in how people connect with technology
            to create meaningful, delightful experiences and how psychology impacts these
            interactions.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
