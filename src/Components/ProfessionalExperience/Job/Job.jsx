import React from 'react';

import { JobStyle } from './Job.module.scss';
import Paragraph from '../../../Atoms/Paragraph/Paragraph';
import WorkedYears from '../../../Atoms/WorkedYears/WorkedYears';
import JobDetails from './JobDetails/JobDetails';

const Job = () => {
  const description = 'I have worked here for four years';
  const workingYears = '2015-2019';
  const jobDetails = {
    logo: 'Logo here',
    jobTitle: 'Developer',
    company: 'Vodafone Shared Services Romania',
    location: 'Bucuresti',
  };

  return (
    <>
      <div className={`row m-4 ${JobStyle}`}>
        <WorkedYears years={workingYears} />
        <div className="col-md-9">
          <JobDetails {...jobDetails} />
          <Paragraph innerText={description} />
        </div>
      </div>
    </>
  );
};

export default Job;
