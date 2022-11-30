import React from 'react';
import '../styles/MainContent.scss';

function MainContent() {
	return (
		<section className="mainContent">
			<h1 className="mainContent__title">Raising Our Bar</h1>
			<div className="hero">
				<section className="mainContent__description">
					<p>
						Philadelphia citizens have the right to vote for city-level judges.
						However, information about these elections is often difficult to
						find. This dashboard provides a look at patterns in judge
						sentencing. "Methodology" provides some disclaimers and our sources
						for data.
					</p>
					<ul>
						<li>
							"Search Judge" - Select a judge's name and see their sentencing
							history.
						</li>
						<li>
							"Compare Judges" - Examine two judges' histories side-by-side.
						</li>
						<li>"Bail" - See bail amounts for different statutes </li>
					</ul>
				</section>
			</div>
		</section>
	);
}

export default MainContent;
