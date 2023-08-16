import { BrowserRouter } from 'react-router-dom';
import ResumeContainer from './containers/resume-container';
import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.background}>
        <ResumeContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
