import { Route } from 'react-router-dom';

import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Certifications from '../components/Certifications/Certifications';
import Experience from '../components/ProfessionalExperience/Experience';

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
