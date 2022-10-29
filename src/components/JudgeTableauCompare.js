import React, { useEffect } from 'react';
import JudgeTableau from './JudgeTableau';
import { useState } from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';

const JudgeTableauCompare = () => {
  const [judge1, setJudge1] = useState('');
  const [judge2, setJudge2] = useState('');
  const [searchJudge, setSearchJudge] = useState(false);

  useEffect(() => {
    console.log(`Judge 1 is ${judge1}`);
    console.log(`Judge 2 is ${judge2}`);
  }, [judge1, judge2]);
  return (
    <>
      <section className="judge1">
        <InputLabel>Judge One</InputLabel>
        <Select
          id={'judge1'}
          label={'judge1'}
          placeholder={'Select A Judge'}
          onChange={(e) => {
            setJudge1(e.target.value);
          }}
        >
          <MenuItem value={'A. Jack Snite'}>A. Jack Snite</MenuItem>
          <MenuItem value={'Carolyn H. Nichols'}>Carolyn H. Nichols</MenuItem>
          <MenuItem value={'Earl W. Trent'}>Earl W. Trent</MenuItem>
        </Select>
      </section>
      <section className="judge2">
        <InputLabel>Judge Two</InputLabel>
        <Select
          id={'judge2'}
          label={'judge2'}
          placeholder={'Select A Judge'}
          onChange={(e) => {
            setJudge2(e.target.value);
          }}
        >
          <MenuItem value={'A. Jack Snite'}>A. Jack Snite</MenuItem>
          <MenuItem value={'Carolyn H. Nichols'}>Carolyn H. Nichols</MenuItem>
          <MenuItem value={'Earl W. Trent'}>Earl W. Trent</MenuItem>
        </Select>
      </section>
      <button
        onClick={() => {
          setSearchJudge(true);
        }}
      >
        Click Me!
      </button>
      {searchJudge && (
        <section className="judgeTableauCompare" style={{ display: 'grid' }}>
          <JudgeTableau
            className="judgeTableauCompare__child"
            judge={judge1}
            style={{ width: '60%' }}
          />
          <JudgeTableau
            className="judgeTableauCompare__child"
            judge={judge2}
            style={{ width: '60%' }}
          />
        </section>
      )}
    </>
  );
};

export default JudgeTableauCompare;
