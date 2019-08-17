import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ResumeContainer from './Containers/ResumeContainer/ResumeContainer';

import { Background } from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={Background}>
        <ResumeContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
