import React from 'react';
import '../styles/MainContent.scss';

function MainContent() {
	return (
		<section className="mainContent">
			<h1 className="mainContent__title">Raising Our Bar</h1>
			<section className="mainContent__description">
				<p>
					Philadelphia, unlike other cities, elects their judges.
					However, information about judges is often difficult to
					find. This dashboard provides a look at patterns in judge
					sentencing, bail, and history. "Vocabulary" explains common
					legal vocabulary as well as some more information about the
					stats. "Search Judge" lets you select a judge's name and see
					their history. "Compare Judges" allows you to see two of
					them side-by-side.
				</p>
			</section>

			<section className="img-box">
				<img src="https://images.law.com/contrib/content/uploads/sites/402/2022/03/Philadelphia-Criminal-Justice-Center-08-767x633.jpg" />
			</section>
		</section>
	);
}

export default MainContent;
