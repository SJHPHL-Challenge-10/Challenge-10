import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import JudgeTableau from './components/JudgeTableau';
import Home from './components/Home';
function App() {
  const [judge, setJudge] = useState('');
  useEffect(() => {
    console.log(judge);
  }, [judge]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setJudge={() => setJudge()} />}></Route>
        <Route
          path="/judge/:judge"
          element={<JudgeTableau judge={judge} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
