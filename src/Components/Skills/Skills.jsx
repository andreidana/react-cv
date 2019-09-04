import React from 'react';

import StringTitle from '../StringTitle/StringTitle';
import Skill from './Skill/Skill';

const Skills = () => {
  const title = 'SKILLS';
  const skill = {
    name: 'Angular 2+',
    level: '95',
    description: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
    labore wes anderson cred nesciunt sapiente ea proident.`
  }

  return (
    <>
      <StringTitle title = {title}/>
      <div className='p-3'>
        <Skill name={skill.name} level={skill.level} description={skill.description}/>
      </div>
    </>
  );
};

export default Skills;