import React, {Component} from 'react'

import {Redirect} from 'react-router-dom'

import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'

import {getUsersData} from '../../services/ContactsAPI.js'

import './Suggestions.css'

class SuggestionsHome extends Component {
  constructor () {
    super()
    this.state = {
      id: '',
      fireRedirect: false,
      contacts: [{
        id: '',
        name: '',
        lastname: '',
        profile_img: '',
        occupation: '',
        redirect: false
      }]
    }
    this.handleProfile = this.handleProfile.bind(this)
  }
  componentWillMount () {
    getUsersData()
    .then(data => {
      console.log(data)
      this.setState({
        contacts: data.map(function (contact) {
          return ({
            id: contact._id && contact._id || '',
            name: contact.name && contact.name || '',
            lastname: contact.lastname && contact.lastname || '',
            profile_img: contact.profile_img && contact.profile_img || 'http://www.cdn.innesvienna.net//Content/user-default.png',
            occupation: contact.occupation && contact.occupation || ''
          })
        })
      })
    })
  }
  
  handleProfile (id) {
    this.setState({ fireRedirect: true, id: id })
  }

  componentWillReceiveProps () {
    this.setState({
      id: '',
      fireRedirect: false
    })
  }

  render () {
    const { fireRedirect, id} = this.state
    console.log(id)
    return (
      <Row>
        {this.state.contacts.map((contact, index) => {
          return (
            <Col key={index} xs={6} md={2}>
              <Thumbnail className='thumbnail-suggestion' src={contact.profile_img} alt={contact.name}>
                <h3>{contact.name}</h3>
                <h3>{contact.lastname}</h3>
                <p>{contact.occupation}</p>
                <p>
                  <Button type='submit' onClick={() => this.handleProfile(contact.id)} bsSize='sm' bsStyle='default' block>profile</Button>
                  <Button type='submit' onClick={() => this.handleProfile(contact.id)} bsSize='sm' bsStyle='primary' block>message</Button>
                </p>
              </Thumbnail>
            </Col>
          )
        })}
        {fireRedirect && id && <Redirect to={`/profile/${id}`} push />}
      </Row>
    )
  }
}

export default SuggestionsHome
