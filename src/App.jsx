import React from 'react';

import ResumeContainer from './Containers/ResumeContainer/ResumeContainer';

import { Background } from './App.module.scss';

function App() {
  return (
    <div className={Background}>
      <ResumeContainer/>
    </div>
  );
}

export default App;
