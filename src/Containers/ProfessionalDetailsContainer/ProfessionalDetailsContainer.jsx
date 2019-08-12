import React from 'react';

import { ProfessionalDetailContainerStyle } from './ProfessionalDetailsContainer.module.scss';
import StringTitle from '../../Components/StringTitle/StringTitle';
import ProfilePicture from '../../Components/ProfilePicture/ProfilePicture';
import PersonalData from '../../Components/PersonalData/PersonalData';

const ProfessionalDetailsContainer = () => {
  const professionalDetailsTitle = 'PROFESSIONAL DETAILS';
  const attachmentsTitle = 'ATTACHMENTS';

  return (
    <div className = { ProfessionalDetailContainerStyle }>
      <StringTitle title = { professionalDetailsTitle } />
      <ProfilePicture />
      <PersonalData />
      <StringTitle title = { attachmentsTitle } />
    </div>
  );
};

export default ProfessionalDetailsContainer;