import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import login from '../../services/AuthService.jsx'
import { saveToken, getToken, removeToken } from '../../services/StorageService.jsx'

import {Row, Jumbotron, Grid, ControlLabel, Form, Col, FormGroup, FormControl, Button} from 'react-bootstrap'

import './LoginPage.css'

class LoginPage extends Component {
  constructor () {
    super()
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    login(this.state.email, this.state.password)
      .then( token => {
        saveToken(token)
        this.setState({ token })
      })
    .then(() => console.log('token saved!!'))
  }

  isAuthenticated () {
    const token = localStorage.getItem('token')
    return token
  }

  render () {
    const isAlreadyAuthenticated = this.isAuthenticated()
    return (
      <div>
        {isAlreadyAuthenticated ? <Redirect to={{pathname: '/home'}} /> : (
          <div className='content-login'>
            <Grid>
              <Row>
                <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
                  <Jumbotron className='login-form'>
                    <h1>Take my friends</h1>
                    <Form onSubmit={this.handleSubmit} >
                      <Grid>
                        <Col xs={12} sm={12} md={12}>
                          <ControlLabel>Email</ControlLabel>
                          <FormGroup>
                            <FormControl
                              type='email'
                              placeholder='Enter email...'
                              name='email'
                              bsSize='md'
                              data-email={this.handleChange}
                              value={this.state.email}
                              onChange={this.handleChange} />
                          </FormGroup>
                        </Col>
                        <Col xs={12} sm={12} md={12}>
                          <ControlLabel>Password</ControlLabel>
                          <FormGroup>
                            <FormControl
                              type='password'
                              placeholder='Enter password...'
                              name='password'
                              bsSize='md'
                              data-password={this.handleChange}
                              value={this.state.password}
                              onChange={this.handleChange} />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup>
                            <Button
                              type='submit'
                              bsStyle='primary'
                              bsSize='lg'
                              block
                              className='loginSubmit' >
                              Sign in
                            </Button>
                          </FormGroup>
                        </Col>
                        <p><a className='linkToRegister' href='/register'>Not registered? Create an account!</a></p>
                      </Grid>
                    </Form>
                  </Jumbotron>
                </Col>
              </Row>
            </Grid>
          </div>        
        )}
      </div>
    )
  }
}

export default LoginPage
