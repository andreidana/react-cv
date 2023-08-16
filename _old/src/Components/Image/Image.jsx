import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.scss';

const Image = ({ path, height }) => <img className={styles.size} src={path} alt="" height={height} />;

Image.defaultProps = {
  height: 'auto',
};

Image.propTypes = {
  path: PropTypes.string.isRequired,
  height: PropTypes.number,
};

export default Image;
