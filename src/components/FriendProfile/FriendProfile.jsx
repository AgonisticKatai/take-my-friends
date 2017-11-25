import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Grid, Image, InputGroup, Glyphicon, ControlLabel, Form, Col, FormGroup, FormControl, Button } from 'react-bootstrap'

import { GetUserById, SendMessage } from 'services/UserDataServices.js'

import NavbarHeader from 'components/Navbar/Navbar.jsx'

class FriendProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
      fireRedirect: false,
      name: '',
      lastname: '',
      email: '',
      profileImg: '',
      occupation: '',
      friends: '',
      username: ''
    }
  }

  componentWillMount = async () => {
    const { id } = this.props.match.params
    const user = await GetUserById(id)
    this.setState({
      id: user._id || '',
      name: user.name || '',
      lastname: user.lastname || '',
      email: user.email || '',
      profileImg: user.profileImg || 'http://www.cdn.innesvienna.net//Content/user-default.png',
      occupation: user.occupation || '',
      country: user.country || '',
      friends: user.friends || '',
      username: user.username
    })
  }

  handleChange = e => {
    this.setState({
      message: e.target.value
    })
  }

  handleMessage = async (e) => {
    const { id } = this.props.match.params
    const { message } = this.state
    await SendMessage(id, message)
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
                        <Glyphicon glyph='user' />
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
                        <Glyphicon glyph='envelope' />
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
                        disabled
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col sm={6} smOffset={6}>
                  <FormGroup controlId='formControlsTextarea'>
                    <ControlLabel>Send a message to {this.state.name}, sure it can help you!!</ControlLabel>
                    <FormControl componentClass='textarea' rows='5' onChange={this.handleChange} placeholder='enter your message here...' />
                  </FormGroup>
                </Col>
                <Col sm={3} smOffset={9}>
                  <FormGroup>
                    <Button
                      onClick={this.handleMessage}
                      bsStyle='primary'
                      block>
                      Send message
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

export default FriendProfile
