import React from 'react';

import { TitleStyle } from './Title.module.scss';

const Title = (props) => (
    <h4 className = { TitleStyle }>{ props.text }</h4>
  )

export default Title;