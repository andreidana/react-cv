import React from 'react';

import { ProfessionalDetailContainerStyle } from './ProfessionalDetailsContainer.module.scss';
import ProfessionalDetailsTitle from '../../Components/ProfessionalDetailsTitle/ProfessionalDetailsTitle';
import ProfilePicture from '../../Components/ProfilePicture/ProfilePicture';

const ProfessionalDetailsContainer = () => {
  return (
    <div className = { ProfessionalDetailContainerStyle }>
      <ProfessionalDetailsTitle />
      <ProfilePicture />
      Here we will have the proffesional details container
    </div>
  );
};

export default ProfessionalDetailsContainer;