import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import judges from '../helpers/judgeList';
import JudgeTableau from './JudgeTableau';

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
			<section className="wrapper">
				<Select
					className="judge__select"
					value={judge}
					disabled={reset}
					onChange={(e) => {
						setJudge(e.target.value);
						setReset(true);
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
						setReset(false);
						setJudge(false);
					}}
				>
					Reset
				</button>
				{judge && reset && <JudgeTableau judge={judge} url={urlToSend} />}
			</section>
		</>
	);
};

export default JudgeSelect;
