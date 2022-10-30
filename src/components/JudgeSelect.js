import React, { useEffect } from 'react';
import JudgeTableau from './JudgeTableau';
import { useState } from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import judges from '../helpers/judgeList';
import Header from './Header';

const JudgeSelect = () => {
  const [judge, setJudge] = useState('');
  const [reset, setReset] = useState(false);
  const selectStyles = {
    width: '10rem',
    marginInline: '3rem',
    marginBlock: '2rem',
  };
  return (
    <>
      <Header />
      <Select
        className="judgeSelect"
        label={'Judge'}
        style={selectStyles}
        placeholder={'Select A Judge'}
        onChange={(e) => {
          setJudge(e.target.value);
          setReset(false);
        }}
      >
        {judges.map((judge, index) => {
          return (
            <MenuItem key={index} value={judge}>
              {judge}
            </MenuItem>
          );
        })}
      </Select>
      <button
        onClick={() => {
          setReset(true);
          setJudge(false);
        }}
      >
        Reset
      </button>
      {judge && !reset && <JudgeTableau judge={judge} />}
    </>
  );
};

export default JudgeSelect;
