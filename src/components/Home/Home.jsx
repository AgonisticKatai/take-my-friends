import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import NavbarHeader from '../Navbar/Navbar.jsx'
import MainSection from '../MainSection/MainSection.jsx'

import './Home.css'

class Home extends Component {
  
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
            <NavbarHeader />
            <MainSection />
          </div>
        ) : <Redirect to={{pathname: '/login'}} />
        }
      </div>
    )
  } 
}

export default Home



