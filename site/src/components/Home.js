/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import illustration from '../assets/temp-illustration.png';
import NavBar from './NavBar';

function Home({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
  const navigate = useNavigate();

  console.log(currPage);

  const goToProject = () => {
    navigate('/project');
  };

  useEffect(() => {
    setCurrPage('home');
  }, []);

  return (
    <div className="Home">
      <NavBar currPage={currPage} />
      <div className="landing">
        <div className="landing-left">
          <div className="big-header">
            Hi, I&apos;m Sylvia Zhao
          </div>
          <div className="paragraph">
            I&apos;m a UX and visual designer currently majoring
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
