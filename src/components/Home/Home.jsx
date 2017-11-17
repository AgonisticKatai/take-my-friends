import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import NavbarHeader from '../Navbar/Navbar.jsx'
import MainSection from '../MainSection/MainSection.jsx'

import {GetUserProfile} from '../../services/GetUserProfile.js'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      profile: {
        _id:'',
        username:'',
        name: '',
        lastname: '',
        email:'',
        profile_img: '',
        occupation:'',
        country: '',
        friends: []
      }      
    }
  }
  
  componentDidMount() {
    GetUserProfile()
    .then(user => {
      this.setState({
        id: user._id && user._id || '',
        username: user.username && user.username || '',
        name: user.name && user.name || '',
        lastname: user.lastname && user.lastname || '',
        email: user.email && user.email || '',
        profile_img: user.profile_img && user.profile_img || 'http://www.cdn.innesvienna.net//Content/user-default.png',
        occupation: user.occupation && user.occupation || '',
        country: user.country && user.country || '',
        friends: user.friends && user.friends || []
      })
    })
  }
  isAuthenticated () {
    const token = localStorage.getItem('token')
    return token
  }

  render() {
    const isAlreadyAuthenticated = this.isAuthenticated()
    return (
      <div>
        {isAlreadyAuthenticated ?  (
          <div>
            <NavbarHeader userProfile={this.state.profile}/>
            <MainSection />
          </div>
        ) : <Redirect to={{pathname: '/login'}} />
        }
      </div>
    )
  } 
}

export default Home



