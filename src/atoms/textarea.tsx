import styles from '../Input/Input.module.scss';

export type TextareaProps = {
  id: string;
  name: string;
  placeholder: string;
  rows: number;
}

const Textarea = (props: TextareaProps) => (
  <textarea
    className={styles.InputStyle}
    name={props.name}
    id={props.id}
    placeholder={props.placeholder}
    rows={props.rows}
  />
);

export default Textarea;
