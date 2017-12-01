import React, { Component } from 'react'

import NavbarHeader from 'components/Navbar/Navbar.jsx'
import MainSection from 'components/MainSection/MainSection.jsx'
import Footer from 'components/Footer/Footer.jsx'

import { GetUserProfile } from 'services/UserDataServices.js'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: {
        _id: '',
        username: '',
        name: '',
        lastname: '',
        email: '',
        profileImg: '',
        occupation: '',
        country: '',
        friends: []
      }
    }
  }

  componentWillMount = async () => {
    const user = await GetUserProfile()
    this.setState({
      profile: {
        id: user._id,
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        profileImg: user.profileImg,
        occupation: user.occupation,
        friends: user.friends || []
      }
    })
  }

  render () {
    return (
      <div>
        <NavbarHeader userProfile={this.state.profile} />
        <MainSection />
        <Footer />
      </div>
    )
  }
}

export default Home
