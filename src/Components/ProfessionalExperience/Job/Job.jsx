import React from 'react';

import { JobStyle, JobYears, CompanyLogo } from './Job.module.scss';

const Job = () => {
  return (
    <>
      <div className={`row m-4 ${JobStyle}`}>
        <div className='col-md-3'>
          <span className={JobYears}>2002-2010</span>
        </div>
        <div className='col-md-9'>
          <div className={CompanyLogo}>Logo here</div>
          <h6>Developer</h6>
          <div>Vodafone Shared Services Romania</div>
          <div>Bucuresti</div>
          <p className='mt-2'>What I have done is here</p>
        </div>
      </div>
    </>
  );
};

export default Job;