import React from 'react';
import Header from './Header';
import JudgeSelect from './JudgeSelect';

const JudgeTableauCompare = () => {
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
