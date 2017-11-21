import React from 'react'
import { Switch, Route } from 'react-router-dom'

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
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/home' component={Home} />
        <Route path='/account' component={MyAccount} />
        <Route path='/profile/:id' component={UserProfile} />
        <Route path='/friend_profile/:id' component={FriendProfile} />
        <Route path='/find/:job' component={SearchByOccupation} />
      </Switch>
    </div>
  )
}

export default Main
