import StringTitle from './string-title';
import Skill from './skill';
import skillsList from '../static/skills';

const Skills = () => {
  const title = 'SKILLS';

  return (
    <>
      <StringTitle title={title} />
      <div className="p-3">
        {
          skillsList.map(skill => (
            <Skill
              key={skill.idx}
              name={skill.name}
              level={skill.level}
              description={skill.description}
            />
          ))
        }
      </div>
    </>
  );
};

export default Skills;
