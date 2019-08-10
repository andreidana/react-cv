import React from 'react';

import { TitleStyle } from './Title.module.scss';
import Heading from '../Heading/Heading';

const Title = () => {
  const headingText = 'RESUME';

  return (
    // <h4 className = { TitleStyle }>RESUME</h4>
    <Heading style = { TitleStyle } text = { headingText }/>
  );
};

export default Title;