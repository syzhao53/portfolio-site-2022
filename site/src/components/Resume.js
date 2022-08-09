/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import NavBar from './NavBar';
import Footer from './Footer';

function Resume({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  useEffect(() => {
    setCurrPage('resume');
    window.scrollTo(0, 0);
    document.title = 'Resume | Sylvia Zhao';
  }, []);

  return (
    <div className="Resume">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">
          Resume
        </div>
        {/* <button id="download" type="button">PDF</button> */}
        <Footer />
      </div>
    </div>
  );
}

export default Resume;
