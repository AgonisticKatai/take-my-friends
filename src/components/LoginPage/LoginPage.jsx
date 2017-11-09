import React, {Component} from 'react'

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
  }

  render () {
    return (
      <div className='content-login'>
        <Grid>
          <Row>
            <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
              <Jumbotron className='login-form'>
                <h1>Take my friends</h1>
                <Form method='POST' action='http://localhost:3005/login'>
                  <Grid>
                    <Col xs={12} sm={12} md={12}>
                      <ControlLabel>Email</ControlLabel>
                      <FormGroup controlId='formHorizontalEmail'>
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
                      <FormGroup controlId='formHorizontalPassword'>
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
                    <p><a className='linkToRegister' href='./register'>Not registered? Create an account!</a></p>
                  </Grid>
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }
}

export default LoginPage