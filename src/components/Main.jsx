import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginPage from './LoginPage/LoginPage.jsx'
import RegisterPage from './RegisterPage/RegisterPage.jsx'
import Home from './Home/Home.jsx'
import MyAccount from './MyAccount/MyAccount.jsx'
import UserProfile from './UserProfile/UserProfile.jsx'
import SearchByOccupation from './SearchByOccupation/SearchByOccupation.jsx'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/home' component={Home} />
        <Route path='/account' component={MyAccount} />
        <Route path='/profile/:id' component={UserProfile} />
        <Route path='/find/:job' component={SearchByOccupation} />
      </Switch>
    </div>
  )
}

export default Main
