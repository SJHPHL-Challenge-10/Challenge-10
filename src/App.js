import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import JudgeTableau from './components/JudgeTableau';
import Home from './components/Home';
import JudgeTableauCompare from './components/JudgeTableauCompare';

function App() {
  const [judge, setJudge] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/judge" element={<JudgeTableau judge={judge} />}></Route>
        <Route path="/judgeCompare" element={<JudgeTableauCompare />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
