import React, {Component} from 'react'

import {Navbar, NavItem, Image, NavDropdown, MenuItem, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import {GetUserProfile} from '../../services/GetUserProfile.js'
import {removeToken} from '../../services/StorageService.js'

import './Navbar.css'

class NavbarHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile_img: '',
      name: '',
      lastname: '',
      token: true
    }
    this.logOut = this.logOut.bind(this)
  }

  componentWillMount () {
    GetUserProfile()
    .then(user => {
      this.setState({
        profile_img: user.profile_img && user.profile_img || 'http://www.cdn.innesvienna.net//Content/user-default.png',
        name: user.name,
        lastname: user.lastname,
      })
    })
  }

  logOut () {
    removeToken()
  }

  render () {
    return (
      <Navbar inverse collapseOnSelect className='navbar-main' fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/home'>Take my friends</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>About</NavItem>
            <NavItem eventKey={2}>Contact</NavItem>
            <NavDropdown eventKey={3} title='My profile' id='basic-nav-dropdown'>
              <MenuItem eventKey={3.1}>Contacts</MenuItem>
              <MenuItem eventKey={3.2}>Suggestions</MenuItem>
              <MenuItem eventKey={3.3}>Conversations</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Activity</MenuItem>
            </NavDropdown>
          </Nav>          
          <Nav pullRight>
            <LinkContainer to='/account'>
              <NavItem eventKey={4}>My account</NavItem>
            </LinkContainer>  
            <LinkContainer to='/login'>
              <NavItem eventKey={5} onClick={this.logOut}>Logout</NavItem>
            </LinkContainer>          
            <NavItem>{this.state.name && this.state.lastname ? `Logged as ${this.state.name} ${this.state.lastname}` : ''}</NavItem>
            <LinkContainer to='/account'>
              <Image src={this.state.profile_img} className='navbar-profile-image' /> 
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarHeader
