import React from 'react';
import PropTypes from 'prop-types';

import { WorkedYearsStyle } from './WorkedYears.module.scss';

const WorkedYears = ({ years }) => (
  <div className="col-md-3">
    <span className={WorkedYearsStyle}>{years}</span>
  </div>
);

WorkedYears.propTypes = {
  years: PropTypes.string.isRequired,
};

export default WorkedYears;
