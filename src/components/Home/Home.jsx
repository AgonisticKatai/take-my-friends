import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import NavbarHeader from 'components/Navbar/Navbar.jsx'
import MainSection from 'components/MainSection/MainSection.jsx'
import Footer from 'components/Footer/Footer.jsx'

import { GetUserProfile } from 'services/UserDataServices.js'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      profile: {
        _id: '',
        username: '',
        name: '',
        lastname: '',
        email: '',
        profile_img: '',
        occupation: '',
        country: '',
        friends: []
      }
    }
  }

  componentDidMount () {
    GetUserProfile()
    .then(user => {
      this.setState({
        id: user._id || '',
        username: user.username || '',
        name: user.name || '',
        lastname: user.lastname || '',
        email: user.email || '',
        profile_img: user.profile_img || 'http://www.cdn.innesvienna.net//Content/user-default.png',
        occupation: user.occupation || '',
        country: user.country || '',
        friends: user.friends || []
      })
    })
  }
  isAuthenticated () {
    const token = localStorage.getItem('token')
    return token
  }

  render () {
    const isAlreadyAuthenticated = this.isAuthenticated()
    return (
      <div>
        { isAlreadyAuthenticated ? (
          <div>
            <NavbarHeader userProfile={this.state.profile} />
            <MainSection />
            <Footer />
          </div>
        ) : <Redirect to={{pathname: '/login'}} />
        }
      </div>
    )
  }
}

export default Home
