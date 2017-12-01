import React, { Component } from 'react'
import { PageHeader, Row, Grid, Image, Glyphicon } from 'react-bootstrap'

import NavbarHeader from 'components/Navbar/Navbar.jsx'

import { GetUserProfile } from 'services/UserDataServices'

import './Contact.css'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profileImg: ''
    }
  }

  componentWillMount = async () => {
    const user = await GetUserProfile()
    this.setState({
      profileImg: user.profileImg,
    })
  }

  render () {
    return (
      <div>
        <NavbarHeader ProfileImage={this.state.profileImg} />
        <Grid>

        </Grid>       
      </div>
    )
  }
}

export default Contact
