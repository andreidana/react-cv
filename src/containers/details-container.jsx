import React from 'react';
import { Route } from 'react-router-dom';

import { DetailsContainerStyle } from './DetailsContainer.module.scss';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Certifications from '../components/Certifications/Certifications';
import Experience from '../components/ProfessionalExperience/Experience';

const DetailsContainer = () => (
  <div className={DetailsContainerStyle}>
    <Route path="/" exact component={AboutMe} />
    <Route path="/professional-experience" exact component={Experience} />
    <Route path="/skills" exact component={Skills} />
    <Route path="/certifications" exact component={Certifications} />
  </div>
);

export default DetailsContainer;
