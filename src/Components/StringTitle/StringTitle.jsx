import React from 'react';
import PropTypes from 'prop-types';
import { StringTitleStyle } from './StringTitle.module.scss';

const StringTitle = ({ title }) => (
  <h4 className={StringTitleStyle}>{ title }</h4>
);

StringTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StringTitle;
