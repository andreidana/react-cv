import StringTitle from './string-title';
import Jobs from './job/job';
import experience from '../static/experience';

const ProfessionalExperience = () => {
  const title = 'PROFESSIONAL EXPERIENCE';

  return (
    <>
      <StringTitle title={title} />
      <Jobs experienceList={experience} />
    </>
  );
};

export default ProfessionalExperience;
