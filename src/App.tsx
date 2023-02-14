import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path='/' element={Form} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
