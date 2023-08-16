import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Button, Collapse } from 'react-bootstrap';

const Skill = ({ name, level, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="row mb-1">
      <div className="col-sm-4">
        <Button className="ml-3 mr-3" onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open}>{open ? ' - ' : ' + '}</Button>
        {name}
      </div>
      <div className="col-sm-8">
        <ProgressBar className="mt-2" now={level} />
        <Collapse in={open}>
          <div id="example-collapse-text">{description}</div>
        </Collapse>
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Skill;
