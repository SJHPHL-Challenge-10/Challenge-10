import React, { useState } from 'react';
import JudgeSelect from './JudgeSelect';
import TableauReport from 'tableau-react';
import judges from '../helpers/judgeList';
import { Select, MenuItem, InputLabel } from '@mui/material';
import Header from './Header';

const DemogrpahisTableau = () => {
  const [judge, setJudge] = useState('');
  const [reset, setReset] = useState(false);
  const selectStyles = {
    width: '10rem',
    marginInline: '3rem',
    marginBlock: '2rem',
  };
  const parameters = {
    'Disposing Authority': judge,
  };
  let url = `https://public.tableau.com/views/DemographicsandDocketInformation/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link`;

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
          console.log(reset);
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
      {judge && <TableauReport url={url} parameters={parameters} />}
    </>
  );
};

export default DemogrpahisTableau;
