import React from 'react';

import { ProfessionalDetailContainerStyle } from './ProfessionalDetailsContainer.module.scss';
import ProfessionalDetailsTitle from '../../Components/ProfessionalDetailsTitle/ProfessionalDetailsTitle';

const ProfessionalDetailsContainer = () => {
  return (
    <div className = { ProfessionalDetailContainerStyle }>
      <ProfessionalDetailsTitle />
      Here we will have the proffesional details container
    </div>
  );
};

export default ProfessionalDetailsContainer;