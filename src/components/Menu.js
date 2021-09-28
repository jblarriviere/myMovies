import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {
  Button,
  // Popover,
  // PopoverHeader,
  // PopoverBody
} from 'reactstrap';

function Menu(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" expand="md">
      <NavbarBrand href="/">
        <img src="/img/logo.png" alt="Mymoviz logo"></img>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/" color="white">Last Releases</NavLink>
          </NavItem>
          <NavItem>
            <Button color="secondary">11 films</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Menu;