import React from 'react';

import { InputStyle } from '../Input/Input.module.scss';

const Textarea = props => (
  <textarea
    type={props.type}
    className={InputStyle}
    name={props.name}
    id={props.id}
    placeholder={props.placeholder}
    rows={props.rows}
  />
);

export default Textarea;
