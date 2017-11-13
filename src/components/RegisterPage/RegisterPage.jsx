import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Row, Jumbotron, Grid, ControlLabel, Form, Col, FormGroup, FormControl, Button} from 'react-bootstrap'

import {saveToken, getToken} from '../../services/StorageService.jsx'
import register from '../../services/RegisterService.jsx'
import login from '../../services/AuthService.jsx'

import './RegisterPage.css'

class RegisterPage extends Component {
  constructor (props) {
    super(props)
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
    register(this.state.email, this.state.password)
      .then(response => 
        login(this.state.email, this.state.password))
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
          <div className='content-register'>
            <Grid>
              <Row>
                <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
                  <Jumbotron className='register-form'>
                    <h2>User registration</h2>
                    <Form onSubmit={this.handleSubmit}>
                      <Grid>                  
                        <Col sm={12}>
                          <ControlLabel>Enter your email for create an account</ControlLabel>
                          <FormGroup controlId='formHorizontalEmail'>
                            <FormControl
                              type='email'
                              placeholder='Enter email'
                              name='email' data-email={this.handleChange}
                              value={this.state.email}
                              onChange={this.handleChange} />
                          </FormGroup>
                        </Col>
                        <Col sm={12}>
                          <ControlLabel>Enter an acces password</ControlLabel>
                          <FormGroup controlId='formHorizontalPassword'>
                            <FormControl
                              type='password'
                              placeholder='Enter password'
                              name='password'
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
                              className='registerSubmit' >
                              Sign in
                            </Button>
                          </FormGroup>
                        </Col>
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

export default RegisterPage
