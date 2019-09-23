import React from 'react';

import { InputStyle } from './Input.module.scss';

const Input = props => {
    return (
        <input type={props.type} class={InputStyle} name={props.name} id={props.id} placeholder={props.placeholder}></input>
    );
};

export default Input;