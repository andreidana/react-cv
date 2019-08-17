import React from 'react';
import { Route } from 'react-router-dom';

import { DetailsContainerStyle } from './DetailsContainer.module.scss';
import AboutMe from '../../Components/AboutMe/AboutMe';
import ProfessionalExperience from '../../Components/ProfessionalExperience/ProfessionalExperience';
import Skills from '../../Components/Skills/Skills';
import Certifications from '../../Components/Certifications/Certifications';
import Contact from '../../Components/Contact/Contact';

const DetailsContainer = () => {
  return (
    <div className = { DetailsContainerStyle }>
      <Route path="/" exact component={AboutMe}/>
      <Route path="/professional-experience" exact component={ProfessionalExperience}/>
      <Route path="/skills" exact component={Skills}/>
      <Route path="/certifications" exact component={Certifications}/>
      <Route path="/contact" exact component={Contact}/>
    </div>
  );
};

export default DetailsContainer;