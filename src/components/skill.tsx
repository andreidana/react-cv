import { useState } from 'react';
import { ProgressBar, Button, Collapse } from 'react-bootstrap';

type SkillProps = {
  name: string;
  level: number;
  description: string;
}

const Skill = (props: SkillProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="row mb-1">
      <div className="col-sm-4">
        <Button className="ml-3 mr-3" onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open}>{open ? ' - ' : ' + '}</Button>
        {props.name}
      </div>
      <div className="col-sm-8">
        <ProgressBar className="mt-2" now={props.level} />
        <Collapse in={open}>
          <div id="example-collapse-text">{props.description}</div>
        </Collapse>
      </div>
    </div>
  );
};

export default Skill;
