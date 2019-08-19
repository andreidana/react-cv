import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarItem = (props) => (
  <>
    <FontAwesomeIcon icon={props.icon} />
    {props.itemName}
  </>)

export default NavbarItem;