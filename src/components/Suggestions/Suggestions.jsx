import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Thumbnail, Button } from 'react-bootstrap'

import { GetAllUsers, AddFriend } from 'services/UserDataServices.js'

import './Suggestions.css'

class SuggestionsHome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      addFriend: false,
      id: '',
      fireRedirect: false,
      contacts: [{
        id: '',
        name: '',
        lastname: '',
        profileImg: '',
        occupation: ''
      }]
    }
  }

  componentDidMount = async () => {
    await this.getAllUsers()
  }

  componentDidUpdate = async () => {
    if (this.state.addFriend) {
      await this.getAllUsers()
    }
  }

  getAllUsers = async () => {
    const data = await GetAllUsers()
    this.setState({
      addFriend: false,
      contacts: data.map(contact => {
        return ({
          id: contact._id || '',
          name: contact.name || '',
          lastname: contact.lastname || '',
          profileImg: contact.profileImg || 'http://www.cdn.innesvienna.net//Content/user-default.png',
          occupation: contact.occupation || ''
        })
      })
    })
  }

  handleProfile = id => {
    this.setState({ fireRedirect: true, id: id })
  }

  handleFriend = async (id) => {
    await AddFriend(id)
    this.setState({ addFriend: true })
    this.props.addFriend(true)
  }

  render () {
    const { fireRedirect, id } = this.state
    return (
      <div className='suggestionsCarrusel'>
        { this.state.contacts.map((contact, index) => {
          return (
            <Thumbnail className='thumbnail-suggestion' key={index} src={contact.profileImg} alt={contact.name}>
              <h3>{ contact.name }</h3>
              <h3>{ contact.lastname }</h3>
              <p>{ contact.occupation }</p>
              <p>
                <Button type='submit' onClick={() => this.handleProfile(contact.id)} bsSize='sm' bsStyle='default' block>profile</Button>
                <Button type='submit' onClick={() => this.handleFriend(contact.id)} bsSize='sm' bsStyle='primary' block>add friend</Button>
              </p>
            </Thumbnail>
          )
        })}
        { fireRedirect && id && <Redirect to={`/profile/${id}`} push /> }
      </div>
    )
  }
}

export default SuggestionsHome
