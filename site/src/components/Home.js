/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import illustration from '../assets/temp-illustration.png';
import NavBar from './NavBar';

function Home() {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
  const navigate = useNavigate();

  const goToProject = () => {
    navigate('/project');
  };

  return (
    <div className="Home">
      <NavBar />
      <div className="landing">
        <div className="landing-left">
          <div className="typing-header">
            Hi, I&apos;m Sylvia Zhao
          </div>
          <div className="paragraph">
            I&apos;m a UX and visual designer currently majoring&nbsp;
            in Cognitive Science and Computer Science at the University of Pennsylvania.
          </div>
          <button className="button" type="button" onClick={goToProject}>Project</button>
        </div>
        <div className="landing-right">
          <img src={illustration} alt="temp illustration" />
        </div>
      </div>
    </div>
  );
}

export default Home;
