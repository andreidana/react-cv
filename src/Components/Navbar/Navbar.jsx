import React from 'react';
import { Link } from 'react-router-dom';
 
import { MenuWrapper, MenuContent } from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={ MenuWrapper }>
      <div className={ MenuContent }>
        <ul>
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/professional-experience">Professional Experience</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
