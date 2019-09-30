import React from 'react';
import styles from './Image.module.scss';

const Image = props => <img className = {styles.size} src = { props.path } alt = "" height = { props.height }></img>

Image.defaultProps = {
  height: 'auto'
}

export default Image;