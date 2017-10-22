import React from 'react'

import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap'

import './Navbar.css'

const NavbarHeader = () => {
  return (
    <Navbar inverse collapseOnSelect className='navbar-main'>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#'>Take my friends</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href='#'>About</NavItem>
          <NavItem eventKey={2} href='#'>Contact</NavItem>
          <NavDropdown eventKey={3} title='Item3' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1}>Item3.1</MenuItem>
            <MenuItem eventKey={3.2}>Item3.2</MenuItem>
            <MenuItem eventKey={3.3}>Item3.3</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Item3.4</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href='#'>My account</NavItem>
          <NavItem eventKey={2} href='#'>Login</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarHeader
