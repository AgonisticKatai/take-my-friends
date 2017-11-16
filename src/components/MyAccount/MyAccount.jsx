import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Row, Grid, Image, InputGroup, Glyphicon, ControlLabel, Form, Col, FormGroup, FormControl, Button} from 'react-bootstrap'

import {GetUserProfile} from '../../services/GetUserProfile.js'
import {UpdateProfile} from '../../services/UpdateProfile.js'

import NavbarHeader from '../Navbar/Navbar.jsx'

import './MyAccount.css'

class MyAccount extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      email: '',
      profile_img: '',
      occupation: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    GetUserProfile()
    .then(user => {
      this.setState({
        id: user._id && user._id || '',
        name: user.name && user.name || '',
        lastname: user.lastname && user.lastname || '',
        email: user.email && user.email || '',
        profile_img: user.profile_img && user.profile_img || 'http://www.cdn.innesvienna.net//Content/user-default.png',
        occupation: user.occupation && user.occupation || '',
        country: user.country && user.country || ''
      })
    })
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    UpdateProfile(this.state.name, this.state.lastname, this.state.email, this.state.profile_img, this.state.occupation)
    .then(() => console.log('profile updated...'))
  }
  
  isAuthenticated () {
    const token = localStorage.getItem('token')
    return token
  }

  render() {
    const isAlreadyAuthenticated = this.isAuthenticated()
    return (
      <div>
        {isAlreadyAuthenticated ?  (
          <div>
            <NavbarHeader ProfileImage={this.state.profile_img}/>
            <Grid>
              <Row>
                <Col sm={12} className='form-my-account'>
                  <Form onSubmit={this.handleSubmit}>
                    <h3>User profile</h3>
                    <h4>please, keep your data updated for a better user experience</h4>
                    <h6>In this section you can modify your user and contact information. It is important that the field of work is specified clearly and concisely so that other users can find you when they need your services.</h6>
                    <Col sm={2}>
                      <Image src={this.state.profile_img} className='profile-image' rounded />
                    </Col>
                    <Col sm={3}>
                      <ControlLabel>Name</ControlLabel>
                      <FormGroup>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Glyphicon glyph="user" />
                          </InputGroup.Addon>
                          <FormControl
                            type='text'
                            placeholder='Enter name'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange} 
                          />                       
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col sm={3}>
                      <ControlLabel>Lastname</ControlLabel>
                      <FormGroup>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Glyphicon glyph="user" />
                          </InputGroup.Addon>
                          <FormControl
                            type='text'
                            placeholder='Enter lastname'
                            name='lastname'
                            value={this.state.lastname}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col sm={4}>
                      <ControlLabel>Email</ControlLabel>
                      <FormGroup>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Glyphicon glyph="envelope" />
                          </InputGroup.Addon>
                          <FormControl
                            type='email'
                            placeholder='Enter email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col sm={4}s>
                      <ControlLabel>Occupation</ControlLabel>
                      <FormGroup>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Glyphicon glyph="briefcase" />
                          </InputGroup.Addon>
                          <FormControl
                            type='text'
                            placeholder='Enter occupation'
                            name='occupation'
                            value={this.state.occupation}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <ControlLabel>Profile image (URL)</ControlLabel>
                      <FormGroup>
                        <InputGroup>
                          <InputGroup.Addon>
                            <Glyphicon glyph="picture" />
                          </InputGroup.Addon>
                          <FormControl
                            type='text'
                            name='profile_img'
                            value={this.state.profile_img}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col sm={3} smOffset={9}>
                      <FormGroup>
                        <Button
                          type='submit'
                          bsStyle='primary'
                          bsSize='md'
                          block>
                          Update profile
                        </Button>
                      </FormGroup>
                    </Col>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </div>
        ) : <Redirect to={{pathname: '/login'}} />
        }
      </div>
    )
  } 
}

export default MyAccount
