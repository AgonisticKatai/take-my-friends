import React from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginPage from './LoginPage/LoginPage.jsx'
import RegisterPage from './RegisterPage/RegisterPage.jsx'
import Home from './Home/Home.jsx'
import ContactSearch from './ContactSearch/ContactSearch.jsx'

const Main = props => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/home' component={Home} />
        <Route path='/contact_search:query' component={ContactSearch} />
      </Switch>
    </div>
  )
}

export default Main
