/* eslint-disable */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import './assets/App.css';
import {
  Routes, Route,
} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  // const [user, setUser] = useState({
  //   username: 'participant',
  //   password: 'participantpass',
  //   messages: 0,
  // });

  // const [study, setStudy] = useState({
  //   studyId: '',
  //   participants: [''],
  //   researchers: [],
  //   tags: [],
  // });
  // const [status, setStatus] = useState({ isEnrolled: false });
  // // for chat
  // const [notification, setNotification] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
