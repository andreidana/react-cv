import styles from './string-title.module.scss';

type StringTitleProps = {
  title: string;
}

const StringTitle = (props: StringTitleProps) => (
  <h4 className={styles.StringTitleStyle}>{ props.title }</h4>
);

export default StringTitle;
