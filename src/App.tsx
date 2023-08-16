import { BrowserRouter } from 'react-router-dom';
import ResumeContainer from './containers/resume-container';
import { Background } from 'App.scss';

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
