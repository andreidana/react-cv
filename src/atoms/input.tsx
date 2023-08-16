import { HTMLInputTypeAttribute } from 'react';
import styles from './Input.module.scss';

export type InputProps = {
  id: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

const Input = (props: InputProps) => (
  <input type={props.type} className={styles.InputStyle} name={props.name} id={props.id} placeholder={props.placeholder} />
);

export default Input;
