import React from 'react';

const JudgeSelect = () => {
  return (
    <>
      <InputLabel id="demo-simple-select-label">Judge</InputLabel>
      <Select
        label={'Judge'}
        placeholder={'Select A Judge'}
        onChange={(e) => {
          setJudge(e.target.value);
        }}
      >
        <MenuItem value={'A. Jack Snite'}>A. Jack Snite</MenuItem>
        <MenuItem value={'Carolyn H. Nichols'}>Carolyn H. Nichols</MenuItem>
        <MenuItem value={'Earl W. Trent'}>Earl W. Trent</MenuItem>
      </Select>
      {judge && <JudgeTableau judge={judge} />}
    </>
  );
};

export default JudgeSelect;
