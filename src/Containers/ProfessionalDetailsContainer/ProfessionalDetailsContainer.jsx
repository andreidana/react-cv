import React from 'react';

import { ProfessionalDetailContainerStyle } from './ProfessionalDetailsContainer.module.scss';
import ProfessionalDetailsTitle from '../../Components/ProfessionalDetailsTitle/ProfessionalDetailsTitle';
import ProfilePicture from '../../Components/ProfilePicture/ProfilePicture';
import PersonalData from '../../Components/PersonalData/PersonalData';

const ProfessionalDetailsContainer = () => {
  const professionalDetailsTitle = 'PROFESSIONAL DETAILS';
  const attachmentsTitle = 'ATTACHMENTS';

  return (
    <div className = { ProfessionalDetailContainerStyle }>
      <ProfessionalDetailsTitle title = { professionalDetailsTitle } />
      <ProfilePicture />
      <PersonalData />
      <ProfessionalDetailsTitle title = { attachmentsTitle } />
    </div>
  );
};

export default ProfessionalDetailsContainer;