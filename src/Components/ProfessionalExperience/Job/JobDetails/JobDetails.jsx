import React from 'react';
import PropTypes from 'prop-types';

import { CompanyLogo } from './JobDetails.module.scss';

const JobDetails = ({
  logo, jobTitle, company, location,
}) => (
  <>
    <div className={CompanyLogo}>{logo}</div>
    <h6>{jobTitle}</h6>
    <div>{company}</div>
    <div>{location}</div>
  </>
);

JobDetails.propTypes = {
  logo: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default JobDetails;
