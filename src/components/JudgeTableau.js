import React from 'react';
import TableauReport from 'tableau-react';

const JudgeTableau = ({ judge, url }) => {
	const parameters = {
		'Disposing Authority': judge,
	};

	return <TableauReport url={url} parameters={parameters} />;
};

export default JudgeTableau;
