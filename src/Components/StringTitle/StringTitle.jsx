import React from 'react';

import { StringTitleStyle } from './StringTitle.module.scss';
import Heading from '../Heading/Heading';

const StringTitle = (props) => (
    <Heading style = { StringTitleStyle } text = { props.title }/>
  )

export default StringTitle;