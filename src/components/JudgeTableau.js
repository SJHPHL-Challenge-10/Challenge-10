import React from 'react';
import TableauReport from 'tableau-react';

const JudgeTableau = ({ judge }) => {
  const parameters = {
    'Disposing Authority': 'A. Jack Snite',
  };
  let url = `https://public.tableau.com/views/CourtData_16670111634290/JudgeDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link`;

  return (
    <div className="App">
      <TableauReport url={url} parameters={parameters} />
    </div>
  );
};

export default JudgeTableau;
