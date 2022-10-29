import React, { useState } from 'react';
import Header from './Header';
import '../styles/home.scss';
import MainContent from './MainContent';
import { Select, MenuItem, InputLabel } from '@mui/material';
import JudgeTableau from './JudgeTableau';

const Home = () => {
  const [judge, setJudge] = useState('');
  return (
    <div className="home">
      <section className="wrapper">
        <Header />
        <MainContent />
      </section>
    </div>
  );
};

export default Home;
