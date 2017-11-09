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
          <NavDropdown eventKey={3} title='My profile' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1}>Contacts</MenuItem>
            <MenuItem eventKey={3.2}>Suggestions</MenuItem>
            <MenuItem eventKey={3.3}>Conversations</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Activity</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href='#'>My account</NavItem>
          <NavItem eventKey={2} href='#'>
            <div className='g-signin2' data-onsuccess='onSignIn' data-theme='dark' />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarHeader
