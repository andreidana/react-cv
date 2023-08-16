import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NavbarItemProps = {
  icon: IconDefinition;
  itemName: string;
}

const NavbarItem = (props: NavbarItemProps) => (
  <>
    <FontAwesomeIcon icon={props.icon} />
    {props.itemName}
  </>
);

export default NavbarItem;
