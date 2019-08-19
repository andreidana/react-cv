import React from 'react';
import { NavLink } from 'react-router-dom';
import { faUser, faBook, faLightbulb, faGraduationCap, faAddressBook } from '@fortawesome/free-solid-svg-icons';
 
import { MenuWrapper } from './Navbar.module.scss';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className={ MenuWrapper }>
      <div>
        <ul>
          <li><NavLink to="/" exact><NavbarItem icon = {faUser} itemName = 'ABOUT ME'/></NavLink></li>
          <li><NavLink to="/professional-experience"><NavbarItem icon = {faBook} itemName = 'PROFESSIONAL EXPERIENCE'/></NavLink></li>
          <li><NavLink to="/skills"><NavbarItem icon = {faLightbulb} itemName = 'SKILLS'/></NavLink></li>
          <li><NavLink to="/certifications"><NavbarItem icon = {faGraduationCap} itemName = 'CERTIFICATIONS'/></NavLink></li>
          <li><NavLink to="/contact"><NavbarItem icon = {faAddressBook} itemName = 'CONTACT'/></NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
