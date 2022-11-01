import React, { useEffect } from 'react';
import JudgeTableau from './JudgeTableau';
import { useState } from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import judges from '../helpers/judgeList';

const JudgeSelect = ({ url }) => {
	const [judge, setJudge] = useState('');
	const [reset, setReset] = useState(false);
	let urlToSend;
	if (url) {
		urlToSend = url;
	} else {
		urlToSend = `https://public.tableau.com/views/CourtData_16670111634290/JudgeDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link`;
	}
	return (
		<>
			<Select
				className="judge__select"
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
			{judge && !reset && <JudgeTableau judge={judge} url={urlToSend} />}
		</>
	);
};

export default JudgeSelect;
