import React from 'react';

import StringTitle from '../../StringTitle/StringTitle';
import Jobs from '../Job/Job';
import education from '../../../StaticData/education';

const AcademicBackground = () => {
  const title = 'ACADEMIC BACKGROUND';

  return (
    <>
      <StringTitle title={title} />
      <Jobs experienceList={education} />
    </>
  );
};

export default AcademicBackground;
