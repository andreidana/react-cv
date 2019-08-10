import React from 'react';

import { ProfessionalDetailsTitleStyle } from './ProfessionalDetailsTitle.module.scss';
import Heading from '../Heading/Heading';

const ProfessionalDetailsTitle = () => {
  const title = 'PROFESSIONAL DETAILS';

  return (
    <Heading style = { ProfessionalDetailsTitleStyle } text = { title }/>
  );
};

export default ProfessionalDetailsTitle;