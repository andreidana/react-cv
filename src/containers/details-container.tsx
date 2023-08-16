import { Route } from 'react-router-dom';

import AboutMe from '../components/about-me';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';

import styles from './DetailsContainer.module.scss';

const DetailsContainer = () => (
  <div className={styles.DetailsContainerStyle}>
    <Route path="/" Component={AboutMe} />
    <Route path="/professional-experience" Component={Experience} />
    <Route path="/skills" Component={Skills} />
    <Route path="/certifications" Component={Certifications} />
  </div>
);

export default DetailsContainer;
