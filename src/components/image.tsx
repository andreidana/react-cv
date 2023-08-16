import styles from './image.module.scss';

type ImageProps = {
  path: string;
  height?: number;
}

const Image = (props: ImageProps) => <img className={styles.size} src={props.path} alt="" height={props.height ?? 'auto'} />;

export default Image;
