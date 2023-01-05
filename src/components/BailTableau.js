import React from 'react'
import TableauReport from 'tableau-react'
import Header from './Header'

const JudgeTableau = () => {
	let url = `https://public.tableau.com/views/AverageBailAmounts/AverageBailDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link`
	return (
		<div className="App">
			<Header />
			<TableauReport url={url} />
		</div>
	)
}

export default JudgeTableau
