import React from 'react';
import BailSelect from './BailSelect';
import JudgeTableau from './JudgeTableau';
import { useState } from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import Header from './Header';

const Bail = () => {
  return (
    <>
      <Header />
      <BailSelect />
    </>
  );
};

export default Bail;
