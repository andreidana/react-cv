import './App.module.scss';
import ResumeContainer from './Containers/ResumeContainer/ResumeContainer';

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
