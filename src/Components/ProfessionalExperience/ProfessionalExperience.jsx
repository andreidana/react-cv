import React from 'react';

import StringTitle from '../StringTitle/StringTitle';
import Job from './Job/Job';

const ProfessionalExperience = () => {
  const title = 'PROFESSIONAL EXPERIENCE';
  const academicTitle = 'ACADEMIC BACKGROUND';

  return (
    <>
      <StringTitle title = {title}/>
      <Job/>
      <StringTitle title = {academicTitle}/>
    </>
  );
};

export default ProfessionalExperience;