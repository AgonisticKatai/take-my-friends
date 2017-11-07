import React, {Component} from 'react'

import {Row, Jumbotron, Grid, ControlLabel, Form, Col, FormGroup, FormControl, Button} from 'react-bootstrap'

import './RegisterPage.css'

class RegisterPage extends Component {
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
      <div className='content-register'>
        <Grid>
          <Row>
            <Col sm={8} smOffset={2}>
              <Jumbotron className='register-form'>
                <h2>User registration</h2>
                <Form>
                  <Grid>
                    <Col sm={6}>
                      <ControlLabel>Name</ControlLabel>
                      <FormGroup controlId='formHorizontalName'>
                        <FormControl
                          type='text'
                          placeholder='Enter name'
                          name='name' data-name={this.handleChange}
                          value={this.state.name}
                          onChange={this.handleChange} />
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <ControlLabel>Lastname</ControlLabel>
                      <FormGroup controlId='formHorizontalLastname'>
                        <FormControl
                          type='text'
                          placeholder='Enter lastname'
                          name='lastname' data-lastname={this.handleChange}
                          value={this.state.lastname}
                          onChange={this.handleChange} />
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <ControlLabel>Email</ControlLabel>
                      <FormGroup controlId='formHorizontalEmail'>
                        <FormControl
                          type='email'
                          placeholder='Enter email'
                          name='email' data-email={this.handleChange}
                          value={this.state.email}
                          onChange={this.handleChange} />
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <ControlLabel>Username</ControlLabel>
                      <FormGroup controlId='formHorizontalUsername'>
                        <FormControl
                          type='text'
                          placeholder='Enter username'
                          name='username'
                          data-username={this.handleChange}
                          value={this.state.username}
                          onChange={this.handleChange} />
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <ControlLabel>Password</ControlLabel>
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
                    <Col sm={6}>
                      <ControlLabel>Confirm password</ControlLabel>
                      <FormGroup controlId='formHorizontalConfirm_password'>
                        <FormControl
                          type='password'
                          placeholder='Confirm password'
                          name='confirm_password'
                          data-confirm_password={this.handleChange}
                          value={this.state.confirm_password}
                          onChange={this.handleChange} />
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <ControlLabel>Ocupation</ControlLabel>
                      <FormGroup controlId='formHorizontalOcupation'>
                        <FormControl
                          type='text'
                          placeholder='Enter ocupation'
                          name='ocupation'
                          data-ocupation={this.handleChange}
                          value={this.state.ocupation}
                          onChange={this.handleChange} />
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <ControlLabel>Profile image</ControlLabel>
                      <FormGroup controlId='formHorizontalProfile_image'>
                        <FormControl
                          type='file'
                          name='profile_image'
                          data-profile_image={this.handleChange}
                          value={this.state.profile_image}
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

    )
  }
}

export default RegisterPage
