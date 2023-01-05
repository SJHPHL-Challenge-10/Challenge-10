import React from 'react'
import TableauReport from 'tableau-react'
import Header from './Header'

const DemogrpahicsTableau = () => {
	let urlToSend = `https://public.tableau.com/views/DemographicsandDocketInformation/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link`
	return (
		<>
			<Header />
			{/* <JudgeSelect url={urlToSend} /> */}
			<TableauReport url={urlToSend} />
		</>
	)
}

export default DemogrpahicsTableau
