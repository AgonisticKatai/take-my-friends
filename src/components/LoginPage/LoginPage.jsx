import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import toastr from 'toastr'
import {Row, Jumbotron, Grid, ControlLabel, Form, Col, FormGroup, FormControl, Button} from 'react-bootstrap'

import { saveToken, getToken, removeToken } from '../../services/StorageService.js'
import login from '../../services/AuthService.js'

import './LoginPage.css'

class LoginPage extends Component {
  constructor () {
    super()
    this.state = {
      token: false,
      email: '',
      password: ''
    }
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
        this.setState({token: true})
        toastr.success('Login succesfull!!')
      })
    .catch(() => toastr.error('Invalid username or password'))
  }

  render () {
    const isAlreadyAuthenticated = this.state.token
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
                              autoFocus
                              placeholder='Enter email...'
                              name='email'
                              bsSize='md'
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
