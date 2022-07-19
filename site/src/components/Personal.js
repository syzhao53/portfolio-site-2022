/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import NavBar from './NavBar';
import Footer from './Footer';

function Personal({ currPage, setCurrPage }) {
//   const navigate = useNavigate();

  useEffect(() => {
    setCurrPage('');
    window.scrollTo(0, 0);
    document.title = 'Personal Work | Sylvia Zhao';
  }, []);

  return (
    <div className="Personal">
      <NavBar currPage={currPage} />
      <div className="project-wrap">
        <div className="project-header">
          Personal Work
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Personal;
