import StringTitle from './string-title';
import Jobs from './job/job';
import education from '../static/education';

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
