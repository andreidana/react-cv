import React from 'react';
import PropTypes from 'prop-types';
import { JobStyle } from './Job.module.scss';
import Paragraph from '../../../Atoms/Paragraph/Paragraph';
import WorkedYears from '../../../Atoms/WorkedYears/WorkedYears';
import JobDetails from './JobDetails/JobDetails';


const Jobs = ({ experienceList }) => (
  <>
    {
      experienceList.map(exp => (
        <>
          <div className={`row m-4 ${JobStyle}`}>
            <WorkedYears years={exp.workingYears} />
            <div className="col-md-9">
              <JobDetails {...exp} />
              <Paragraph innerText={exp.description} />
            </div>
          </div>
        </>
      ))
    }

  </>
);

// eslint-disable-next-line react/no-typos
Jobs.PropTypes = {
  experienceList: PropTypes.arrayOf(PropTypes.shape({
    workingYears: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default Jobs;
