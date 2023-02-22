import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import Sorteio from './pages/Sorteio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path='/' element={Home} />
            <Route path='/sorteio' element={Sorteio}/>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
