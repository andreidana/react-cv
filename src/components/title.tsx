import styles from './title.module.scss';

type TitleProps = {
  text: string;
}

const Title = (props: TitleProps) => (
  <h4 className={styles.TitleStyle}>{ props.text }</h4>
);

export default Title;
