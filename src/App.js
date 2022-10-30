import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import JudgeTableau from './components/JudgeTableau';
import Home from './components/Home';
import JudgeTableauCompare from './components/JudgeTableauCompare';
import JudgeSelect from './components/JudgeSelect';

import BailTableau from './components/BailTableau';
import Vocabulary from './components/Vocabulary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/judge" element={<JudgeSelect />}></Route>
        <Route path="/judgeCompare" element={<JudgeTableauCompare />}></Route>
        <Route path="/bail" element={<BailTableau />}></Route>
        <Route path="/vocabulary" element={<Vocabulary />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
