import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Row, Grid, Image, InputGroup, Glyphicon, ControlLabel, Form, Col, FormGroup, FormControl, Button} from 'react-bootstrap'

import {GetUserById} from '../../services/GetUserById.js'
import {AddFriend} from '../../services/AddFriend.js'

import NavbarHeader from '../Navbar/Navbar.jsx'

import './UserProfile.css'

class UserProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fireRedirect: false,
      name: '',
      lastname: '',
      email: '',
      profile_img: '',
      occupation: '',
      friends: '',
      username: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    const {id} = this.props.match.params
    GetUserById(id)
    .then(user => {
      this.setState({
        id: user._id || '',
        name: user.name || '',
        lastname: user.lastname || '',
        email: user.email || '',
        profile_img: user.profile_img || 'http://www.cdn.innesvienna.net//Content/user-default.png',
        occupation: user.occupation || '',
        country: user.country || '',
        friends: user.friends || '',
        username: user.username
      })
    })
  }

  handleSubmit (e) {
    const {id} = this.props.match.params
    e.preventDefault()
    AddFriend(id)
    .then(() => {this.setState({ fireRedirect: true })})
  }
  
  isAuthenticated () {
    const token = localStorage.getItem('token')
    return token
  }

  render() {
    const { fireRedirect } = this.state
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
                            disabled
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
                            disabled
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
                            value={this.state.username}
                            disabled
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
                            disabled
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
                            disabled
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
                          Add to my friends
                        </Button>
                      </FormGroup>
                    </Col>
                  </Form>
                </Col>
              </Row>
            </Grid>
            {fireRedirect && <Redirect to={'/home'} push />}
          </div>
        ) : <Redirect to={{pathname: '/login'}} />
        }
      </div>
    )
  } 
}

export default UserProfile
