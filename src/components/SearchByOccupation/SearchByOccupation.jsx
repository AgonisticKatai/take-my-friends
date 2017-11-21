import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Well, Grid, Image, InputGroup, Glyphicon, ControlLabel, Form, Col, FormGroup, FormControl, Button } from 'react-bootstrap'

import { GetUserByjob } from 'services/UserDataServices.js'

import NavbarHeader from 'components/Navbar/Navbar.jsx'

import './SearchByOccupation.css'

class OccupationSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fireRedirect: false,
      contacts: [{
        id: '',
        name: '',
        lastname: '',
        email: '',
        profile_img: '',
        occupation: '',
        username: ''
      }]
    }
  }

  componentWillMount () {
    const { job } = this.props.match.params
    GetUserByjob(job)
    .then(data => {
      console.log(data)
      this.setState({
        contacts: data.map(function (contact) {
          return ({
            id: contact._id || '',
            name: contact.name || '',
            lastname: contact.lastname || '',
            profile_img: contact.profile_img || 'http://www.cdn.innesvienna.net//Content/user-default.png',
            occupation: contact.occupation || '',
            username: contact.username
          })
        })
      })
    })
  }

  handleMessage (e) {
  }

  render () {
    const { fireRedirect } = this.state
    const { job: occupation } = this.props.match.params
    const anyContact = `Sorry, you don't have any contact with that works as ${occupation}`
    const showCoincidences = `Hey! You have ${this.state.contacts.length} contacts who work as a ${occupation}`
    const showMessage = () => {
      if (this.state.contacts[0]) { return showCoincidences }
      return anyContact
    }

    return (
      <div className='contactsByJob'>
        <Grid>
          <Well>{ showMessage() }</Well>
          { this.state.contacts.map((contact, index) => {
            return (
              <div>
                <NavbarHeader ProfileImage={contact.profile_img} />
                <Row>
                  <Col sm={12} className='form-my-account'>
                    <Form onSubmit={this.handleSubmit}>
                      <Col sm={2}>
                        <Image src={contact.profile_img} className='profile-image' rounded />
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
                              value={contact.name}
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
                              value={contact.lastname}
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
                              value={contact.username}
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
                              <Glyphicon glyph='briefcase' />
                            </InputGroup.Addon>
                            <FormControl
                              type='text'
                              placeholder='Enter occupation'
                              name='occupation'
                              value={contact.occupation}
                              disabled
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col sm={3} smOffset={9}>
                        <FormGroup>
                          <Button
                            onclick={this.handleMessage}
                            bsStyle='primary'
                            bsSize='md'
                            block>
                            Send a message
                          </Button>
                        </FormGroup>
                      </Col>
                    </Form>
                  </Col>
                </Row>
                { fireRedirect && <Redirect to={'/home'} push /> }
              </div>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default OccupationSearch
