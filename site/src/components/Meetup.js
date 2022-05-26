/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../assets/index.css';
import NavBar from './NavBar';

function Meetup({ currPage, setCurrPage }) {
  // const [error, setError] = useState({ message: '' });
  // const [lockoutUser, setLockoutUser] = useState('');
//   const navigate = useNavigate();

  console.log(currPage);

  const footerMessage = 'Made by Sylvia <3';

  useEffect(() => {
    setCurrPage('home');
  }, []);

  return (
    <div className="Meetup">
      <NavBar currPage={currPage} />
      <div>MEETUP</div>
      <div className="footer">
        {footerMessage}
      </div>
    </div>
    // <button className="button" type="button" onClick={goToProject}>View my work</button>
    // TODO: ADD FLOATING CARAT ARROW
  );
}

export default Meetup;
