import React, { Component } from 'react'
import { Navbar, NavItem, Image, MenuItem, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { GetUserProfile } from 'services/UserDataServices.js'
import { removeToken } from 'services/StorageService.js'

import './Navbar.css'

class NavbarHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profileImg: '',
      name: '',
      lastname: '',
      token: true
    }
  }

  componentWillMount = async () => {
    const user = await GetUserProfile()
    this.setState({
      profileImg: user.profileImg || 'http://www.cdn.innesvienna.net//Content/user-default.png',
      name: user.name,
      lastname: user.lastname
    })
  }

  handleLogOut = () => {
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
            <LinkContainer to='/about' >
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>        
          </Nav>
          <Nav pullRight>
            <LinkContainer to='/account'>
              <NavItem eventKey={3}>My account</NavItem>
            </LinkContainer>
            <LinkContainer to='/login'>
              <NavItem eventKey={4} onClick={this.handleLogOut}>Logout</NavItem>
            </LinkContainer>
            <NavItem>{ this.state.name && this.state.lastname ? `Logged as ${this.state.name} ${this.state.lastname}` : '' }</NavItem>
            <Navbar.Brand>
              <LinkContainer to='/account' >
                <Image src={this.state.profileImg} className='navbar-profile-image' />
              </LinkContainer>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarHeader
