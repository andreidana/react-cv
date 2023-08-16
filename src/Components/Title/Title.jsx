import React from 'react';
import PropTypes from 'prop-types';

import { TitleStyle } from './Title.module.scss';

const Title = ({ text }) => (
  <h4 className={TitleStyle}>{ text }</h4>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
