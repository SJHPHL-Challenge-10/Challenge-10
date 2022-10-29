import React from 'react';
import TableauReport from 'tableau-react';

const JudgeTableau = ({}) => {
  const parameters = {
    'Disposing Authority': 'judge,',
  };
  let url = `https://public.tableau.com/views/CourtData_16670111634290/Dashboard1?:language=en-US&publish=yes&:display_count=10&:origin=viz_share_link`;

  return (
    <div className="App">
      <TableauReport url={url} parameters={parameters} />
    </div>
  );
};

export default JudgeTableau;
