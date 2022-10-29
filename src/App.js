import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import JudgeTableau from './components/JudgeTableau';
import Home from './components/Home';
function App() {
  const [judge, setJudge] = useState('');
  const changeState = (e) => {
    const value = e.target.value;
    setJudge(value);
  };
  useEffect(() => {
    console.log(`Parent Says Judge is ${judge}`);
  }, [judge]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home changeState={changeState} />}></Route>
        <Route path="/judge" element={<JudgeTableau judge={judge} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
