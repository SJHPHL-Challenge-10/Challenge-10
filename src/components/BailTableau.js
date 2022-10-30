import React from 'react';
import TableauReport from 'tableau-react';

const JudgeTableau = ({ race, actionYear, actionType, gender }) => {
  let url = `https://public.tableau.com/views/AverageBailAmounts/AverageBailDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link`;

  return (
    <div className="App">
      <TableauReport url={url} />
    </div>
  );
};

export default JudgeTableau;
