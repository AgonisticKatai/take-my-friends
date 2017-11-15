import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginPage from './LoginPage/LoginPage.jsx'
import RegisterPage from './RegisterPage/RegisterPage.jsx'
import Home from './Home/Home.jsx'
import ContactSearch from './ContactSearch/ContactSearch.jsx'
import MyAccount from './MyAccount/MyAccount.jsx'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/home' component={Home} />
        <Route path='/account' component={MyAccount} />
      </Switch>
    </div>
  )
}

export default Main
