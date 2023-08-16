import StringTitle from './string-title';
import PersonalData from './personal-data';
import Teamleader from './team-leader';
import FullStackDeveloper from './full-stack-developer';

const AboutMe = () => {
  const title = 'ABOUT ME';
  const teamLeaderTitle = 'TEAM LEADER';
  const descriptionTitle = 'FULL STACK DEVELOPER';

  return (
    <>
      <StringTitle title={title} />
      <PersonalData />
      <StringTitle title={teamLeaderTitle} />
      <Teamleader />
      <StringTitle title={descriptionTitle} />
      <FullStackDeveloper />
    </>
  );
};

export default AboutMe;
