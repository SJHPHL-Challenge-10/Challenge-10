import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BailTableau from './components/BailTableau';
import DemographicsTableau from './components/DemographicsTableau';
import Home from './components/Home';
import JudgePage from './components/JudgePage';
import JudgeTableauCompare from './components/JudgeTableauCompare';
import Methodology from './components/Methodology';

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
