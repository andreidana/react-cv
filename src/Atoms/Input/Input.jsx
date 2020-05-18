import React from 'react';

import { InputStyle } from './Input.module.scss';

const Input = props => (
  <input type={props.type} className={InputStyle} name={props.name} id={props.id} placeholder={props.placeholder} />
);

export default Input;
