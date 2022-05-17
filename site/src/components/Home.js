/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/index.css';

function Home() {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
  const navigate = useNavigate();

  const goToProject = () => {
    navigate('/project');
  };

  return (
    <div className="Home">
      <div>HOME PAGE</div>
      <button type="button" onClick={goToProject}>Project</button>
    </div>
  );
}

export default Home;
