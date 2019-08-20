import React from 'react';

import { StringTitleStyle } from './StringTitle.module.scss';

const StringTitle = (props) => (
    <h4 className = { StringTitleStyle }>{ props.title }</h4>
  )

export default StringTitle;