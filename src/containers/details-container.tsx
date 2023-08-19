import { Route, Routes } from 'react-router-dom';

import AboutMe from '../components/about-me';
import Skills from '../components/skills';
import Certifications from '../components/certifications';
import Experience from '../components/experience';

import styles from './details-container.module.scss';

const DetailsContainer = () => (
  <div className={styles.DetailsContainerStyle}>
    <Routes>
      <Route path="/" Component={AboutMe} />
      <Route path="/professional-experience" Component={Experience} />
      <Route path="/skills" Component={Skills} />
      <Route path="/certifications" Component={Certifications} />
    </Routes>
  </div>
);

export default DetailsContainer;
