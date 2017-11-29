import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from 'components/PrivateRoute/PrivateRoute.jsx'
import LoginPage from 'components/LoginPage/LoginPage.jsx'
import RegisterPage from 'components/RegisterPage/RegisterPage.jsx'
import Home from 'components/Home/Home.jsx'
import MyAccount from 'components/MyAccount/MyAccount.jsx'
import UserProfile from 'components/UserProfile/UserProfile.jsx'
import SearchByOccupation from 'components/SearchByOccupation/SearchByOccupation.jsx'
import FriendProfile from 'components/FriendProfile/FriendProfile.jsx'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/auth/linkedin/callback' />
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/account' component={MyAccount} />
        <PrivateRoute path='/profile/:id' component={UserProfile} />
        <PrivateRoute path='/friend_profile/:id' component={FriendProfile} />
        <PrivateRoute path='/find/:job' component={SearchByOccupation} />
      </Switch>
    </div>
  )
}

export default Main
