import React, { useEffect } from 'react';
import JudgeTableau from './JudgeTableau';
import { useState } from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import Header from './Header';
import judges from '../helpers/judgeList';
import JudgeSelect from './JudgeSelect';

const JudgeTableauCompare = () => {
	const [judge1, setJudge1] = useState('');
	const [judge2, setJudge2] = useState('');
	const [searchJudge, setSearchJudge] = useState(false);
	const url = `https://public.tableau.com/views/CourtData_16670111634290/JudgeDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link`;
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
			<section className="judge__compare">
				<section className="judge__compare--child judge__compare--judge1">
					<JudgeSelect />
				</section>
				<section className="judge__compare--child judge__compare--judge2">
					<JudgeSelect />
				</section>
			</section>
		</>
	);
};

export default JudgeTableauCompare;
