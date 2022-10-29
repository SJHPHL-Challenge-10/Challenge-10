import React from 'react';
import Header from './Header';
import '../styles/home.scss';
import MainContent from './MainContent';
import { Select, MenuItem, InputLabel } from '@mui/material';

const Home = ({ changeState, judge }) => {
  return (
    <div className="home">
      <section className="wrapper">
        <Header />
        <MainContent />
        <InputLabel id="demo-simple-select-label">Judge</InputLabel>
        <Select
          label={'Judge'}
          placeholder={'Select A Judge'}
          onChange={(e) => {
            changeState(e);
            alert(`New Judge is ${e.target.value}`);
          }}
        >
          <MenuItem value={'A. Jack Snite'}>A. Jack Snite</MenuItem>
          <MenuItem value={'Carolyn H. Nichols'}>Carolyn H. Nichols</MenuItem>
          <MenuItem value={'Earl W. Trent'}>Earl W. Trent</MenuItem>
        </Select>
      </section>
    </div>
  );
};

export default Home;
