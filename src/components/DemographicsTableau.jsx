import React, { useState } from 'react';
import JudgeSelect from './JudgeSelect';
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
	let urlToSend = `https://public.tableau.com/views/DemographicsandDocketInformation/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link`;

	return (
		<>
			<Header />
			<JudgeSelect url={urlToSend} />
		</>
	);
};

export default DemogrpahisTableau;
