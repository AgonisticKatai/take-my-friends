import React from 'react'

import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap'

const NavbarHeader = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Take my friends</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Item1</NavItem>
          <NavItem eventKey={2} href="#">Item2</NavItem>
          <NavDropdown eventKey={3} title="Item3" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Item3.1</MenuItem>
            <MenuItem eventKey={3.2}>Item3.2</MenuItem>
            <MenuItem eventKey={3.3}>Item3.3</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Item3.4</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Item4</NavItem>
          <NavItem eventKey={2} href="#">Item5</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarHeader
