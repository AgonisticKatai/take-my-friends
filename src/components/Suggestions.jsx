import React, {Component} from 'react'

import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'

import {getUsersData} from '../services/ContactsAPI.jsx'

import './Suggestions.css'

class SuggestionsHome extends Component {
  constructor () {
    super()
    this.state = {
      contacts: [{
        id: '',
        name: '',
        lastname: '',
        email: '',
        profile_img: '',
        occupation: '',
        country: ''
      }]
    }
  }
  componentWillMount () {
    getUsersData()
    .then(data => {
      console.log(data)
      this.setState({
        contacts: data.map(function (contact) {
          return ({
            id: contact.id,
            name: contact.name,
            lastname: contact.lastname,
            email: contact.email,
            profile_img: contact.profile_img,
            occupation: contact.occupation,
            country: contact.country
          })
        })
      })
    })
  }
  render () {
    return (
      <Grid>
        <Row>
          {this.state.contacts.map(contact => {
            return (
              <Col xs={6} md={2}>
                <Thumbnail className='thumbnail-suggestion' src={contact.profile_img} alt={contact.name}>
                  <h3>{contact.name}</h3>
                  <h3>{contact.lastname}</h3>
                  <p>{contact.occupation}</p>
                  <p>
                    <Button bsSize='sm' bsStyle='default' block >profile</Button>
                    <Button bsSize='sm' bsStyle='primary' block>message</Button>
                  </p>
                </Thumbnail>
              </Col>
            )
          })}
        </Row>
      </Grid>
    )
  }
}

export default SuggestionsHome
