import React from 'react';
import { Route } from 'react-router-dom';

import { DetailsContainerStyle } from './DetailsContainer.module.scss';
import AboutMe from '../../Components/AboutMe/AboutMe';
import ProfessionalExperience from '../../Components/ProfessionalExperience/ProfessionalExperience';
import Skills from '../../Components/Skills/Skills';
import Certifications from '../../Components/Certifications/Certifications';

const DetailsContainer = () => (
  <div className={DetailsContainerStyle}>
    <Route path="/" exact component={AboutMe} />
    <Route path="/professional-experience" exact component={ProfessionalExperience} />
    <Route path="/skills" exact component={Skills} />
    <Route path="/certifications" exact component={Certifications} />
  </div>
);

export default DetailsContainer;
