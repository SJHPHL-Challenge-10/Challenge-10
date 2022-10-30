import React, { useEffect } from 'react';
import JudgeTableau from './JudgeTableau';
import { useState } from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import Header from './Header';
import judges from '../helpers/judgeList';

const JudgeTableauCompare = () => {
  const [judge1, setJudge1] = useState('');
  const [judge2, setJudge2] = useState('');
  const [searchJudge, setSearchJudge] = useState(false);
  const selectStyles = {
    width: '15rem',
    marginInline: '3rem',
    marginBlock: '2rem',
  };
  useEffect(() => {
    console.log(`Judge 1 is ${judge1}`);
    console.log(`Judge 2 is ${judge2}`);
  }, [judge1, judge2]);
  return (
    <>
      <Header />
      <section className="judgeSelectCompare">
        <section className="judge1">
          <InputLabel>Judge One</InputLabel>
          <Select
            id={'judge1'}
            label={'judge1'}
            placeholder={'Select A Judge'}
            onChange={(e) => {
              setJudge1(e.target.value);
            }}
            style={selectStyles}
          >
            {judges.map((judge, index) => {
              return (
                <MenuItem key={index} value={judge}>
                  {judge}
                </MenuItem>
              );
            })}
          </Select>
        </section>
        <section className="judge2">
          <InputLabel>Judge Two</InputLabel>
          <Select
            style={selectStyles}
            id={'judge2'}
            label={'judge2'}
            placeholder={'Select A Judge'}
            onChange={(e) => {
              setJudge2(e.target.value);
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
        </section>
        {!searchJudge ? (
          <button
            onClick={() => {
              // How to rerender one click??
              setSearchJudge(!searchJudge);
            }}
            className="search__button"
          >
            Click Me!
          </button>
        ) : (
          <button
            onClick={() => {
              // How to rerender one click??
              setSearchJudge(!searchJudge);
            }}
            className="search__button"
          >
            Reset
          </button>
        )}
      </section>
      {searchJudge && (
        <section className="judgeTableauCompare">
          <JudgeTableau
            className="judgeTableauCompare__child"
            judge={judge1}
            style={{ width: '60%' }}
          />
          <JudgeTableau
            className="judgeTableauCompare__child"
            judge={judge2}
            // style={{ width: '60%' }}
          />
        </section>
      )}
    </>
  );
};

export default JudgeTableauCompare;
