import React from 'react';
import Header from './Header';
import '../styles/home.scss';
import MainContent from './MainContent';
import { Select, MenuItem, InputLabel } from '@mui/material';

const Home = ({ changeState }) => {
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
          }}
        >
          <MenuItem value={'A. Jack Snite'}>A. Jack Snite</MenuItem>
          <MenuItem value={'E. Jack Snite'}>E. Jack Snite</MenuItem>
        </Select>
      </section>
    </div>
  );
};

export default Home;
