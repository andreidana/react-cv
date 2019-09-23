import React from 'react';

import { InputStyle } from '../Input/Input.module.scss';

const Textarea = props => {
    return (
        <textarea type={props.type}
            class={InputStyle}
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            rows={props.rows}></textarea>
    );
};

export default Textarea;