import React from 'react';

import { TitleStyle } from './Title.module.scss';
import Heading from '../Heading/Heading';

const Title = (props) => (<Heading style = { TitleStyle } text = { props.text }/>)

export default Title;