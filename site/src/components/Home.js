/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import illustration from '../assets/temp-illustration.png';
import mockup from '../assets/temp-mockup.png';
import NavBar from './NavBar';

function Home({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
  // const navigate = useNavigate();

  console.log(currPage);

  // const goToProject = () => {
  //   navigate('/project');
  // };

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
          UI/UX & Visual Designer. Student in Cognitive & Computer Science at UPenn
          <br />
          Designing for PennApps & Wharton MUSE. Recent PM Intern for Logitech Design Ops
        </div>
        <img id="home-illus" src={illustration} alt="temp illustration" />
      </div>
      <div className="grid">
        <div className="grid-row">
          <img src={mockup} alt="temp mockup" />
          <div className="grid-lcard">
            Card1
          </div>
          <div className="grid-rcard">
            Card2
          </div>
        </div>
      </div>
    </div>
    // <button className="button" type="button" onClick={goToProject}>View my work</button>
    // TODO: ADD FLOATING CARAT ARROW
  );
}

export default Home;
