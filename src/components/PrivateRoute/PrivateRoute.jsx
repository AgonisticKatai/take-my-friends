import React from 'react'
import { Route, Redirect } from 'react-router'
import { getToken } from 'services/StorageService'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getToken() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

export default PrivateRoute
