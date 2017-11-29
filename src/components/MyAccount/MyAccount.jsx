import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Grid, Image, InputGroup, Glyphicon, ControlLabel, Form, Col, FormGroup, FormControl, Button } from 'react-bootstrap'

import { GetUserProfile, UpdateProfile } from 'services/UserDataServices.js'

import NavbarHeader from 'components/Navbar/Navbar.jsx'

import './MyAccount.css'

class MyAccount extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fireRedirect: false,
      name: '',
      lastname: '',
      email: '',
      profileImg: '',
      occupation: ''
    }
  }

  componentWillMount = async () => {
    const user = await GetUserProfile()
    this.setState({
      id: user._id || '',
      name: user.name || '',
      lastname: user.lastname || '',
      email: user.email || '',
      profileImg: user.profileImg || 'http://www.cdn.innesvienna.net//Content/user-default.png',
      occupation: user.occupation || '',
      country: user.country || ''
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await UpdateProfile(this.state.name, this.state.lastname, this.state.email, this.state.profileImg, this.state.occupation)
    this.setState({ fireRedirect: true })
  }

  render () {
    const { fireRedirect } = this.state
    return (
      <div>
        <NavbarHeader ProfileImage={this.state.profileImg} />
        <Grid>
          <Row>
            <Col sm={12} className='form-my-account'>
              <Form onSubmit={this.handleSubmit}>
                <h3>User profile</h3>
                <h4>please, keep your data updated for a better user experience</h4>
                <h6>In this section you can modify your user and contact information. It is important that the field of work is specified clearly and concisely so that other users can find you when they need your services.</h6>
                <Col sm={2}>
                  <Image src={this.state.profileImg} className='profile-image' rounded />
                </Col>
                <Col sm={3}>
                  <ControlLabel>Name</ControlLabel>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph='user' />
                      </InputGroup.Addon>
                      <FormControl
                        type='text'
                        placeholder='Enter name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        required={true}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm={3}>
                  <ControlLabel>Lastname</ControlLabel>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph='user' />
                      </InputGroup.Addon>
                      <FormControl
                        type='text'
                        placeholder='Enter lastname'
                        name='lastname'
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        required={true}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm={4}>
                  <ControlLabel>Email</ControlLabel>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph='envelope' />
                      </InputGroup.Addon>
                      <FormControl
                        type='email'
                        placeholder='Enter email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required={true}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm={4}>
                  <ControlLabel>Occupation</ControlLabel>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph='briefcase' />
                      </InputGroup.Addon>
                      <FormControl
                        type='text'
                        placeholder='Enter occupation'
                        name='occupation'
                        value={this.state.occupation}
                        onChange={this.handleChange}
                        required={true}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <ControlLabel>Profile image (URL)</ControlLabel>
                  <FormGroup>
                    <InputGroup>
                      <InputGroup.Addon>
                        <Glyphicon glyph='picture' />
                      </InputGroup.Addon>
                      <FormControl
                        type='text'
                        name='profileImg'
                        value={this.state.profileImg}
                        onChange={this.handleChange}
                        required={true}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm={3} smOffset={9}>
                  <FormGroup>
                    <Button
                      type='submit'
                      bsStyle='primary'
                      block>
                      Update profile
                    </Button>
                  </FormGroup>
                </Col>
              </Form>
            </Col>
          </Row>
        </Grid>
        { fireRedirect && <Redirect to={'/home'} push /> }
      </div>
    )
  }
}

export default MyAccount
