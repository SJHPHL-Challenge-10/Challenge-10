import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import JudgeTableauCompare from './components/JudgeTableauCompare';
import Methodology from './components/Methodology';
import BailTableau from './components/BailTableau';
import Vocabulary from './components/Vocabulary';
import DemographicsTableau from './components/DemographicsTableau';
import JudgePage from './components/JudgePage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/judge" element={<JudgePage />}></Route>
				<Route path="/judgeCompare" element={<JudgeTableauCompare />}></Route>
				<Route path="/bail" element={<BailTableau />}></Route>
				<Route path="/methodology" element={<Methodology />}></Route>
				<Route path="/demographics" element={<DemographicsTableau />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
