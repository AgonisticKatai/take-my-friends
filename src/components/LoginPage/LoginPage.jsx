import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Image, Jumbotron, Grid, ControlLabel, Form, Col, FormGroup, FormControl, Button } from 'react-bootstrap'

import { saveToken } from 'services/StorageService.js'
import { login, loginWithLinkedIn } from 'services/AuthService.js'

import './LoginPage.css'

class LoginPage extends Component {
  constructor () {
    super()
    this.state = {
      token: false,
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handleSubmit...')
    const token = await login(this.state.email, this.state.password)
    saveToken(token)
    this.setState({token: true})
  }

  handleLinkedInLogin = async () => {
    const linkedIn = await loginWithLinkedIn()
    return linkedIn
  }

  render () {
    const { token } = this.state
    return (
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
                          value={this.state.email}
                          onChange={this.handleChange}
                          required={true}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <ControlLabel>Password</ControlLabel>
                      <FormGroup>
                        <FormControl
                          type='password'
                          placeholder='Enter password...'
                          name='password'
                          value={this.state.password}
                          onChange={this.handleChange}
                          required={true}
                        />
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
                    <Col md={10} mdOffset={2}>
                      <Image onClick={this.handleLinkedInLogin} src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png" />
                    </Col>
                    <p><a className='linkToRegister' href='/register'>Not registered? Create an account!</a></p>               
                  </Grid>
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
        { token && <Redirect to={`/home`} push /> }
      </div>
    )
  }
}

export default LoginPage
