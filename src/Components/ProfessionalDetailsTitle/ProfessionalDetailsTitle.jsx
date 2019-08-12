import React from 'react';

import { ProfessionalDetailsTitleStyle } from './ProfessionalDetailsTitle.module.scss';
import Heading from '../Heading/Heading';

const ProfessionalDetailsTitle = (props) => (
    <Heading style = { ProfessionalDetailsTitleStyle } text = { props.title }/>
  )

export default ProfessionalDetailsTitle;