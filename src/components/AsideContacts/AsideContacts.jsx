import React, {Component} from 'react'

import {getUsersData} from '../../services/ContactsAPI.js'

import './AsideContacts.css'

class AsideContacts extends Component {
  constructor () {
    super()
    this.state = {
      contacts: [{
        name: '',
        lastname: ''
      }]
    }
  }
  componentDidMount () {
    getUsersData()
    .then(data => {
      this.setState({
        contacts: data.map(contact => {
          return ({
            name: contact.name && contact.name || '',
            lastname: contact.lastname && contact.lastname || 'not defined'
          })
        })
      })
    })
  }
  render () {
    return (
      <div className='AsideContacts'>
        <h3>My contacts (<span>{this.state.contacts.length}</span>)</h3>
        <ul className='nav nav-pills nav-stacked'>
          {this.state.contacts.map((userData, index) => {
            return (
              <li key={index} role='presentation'><a href='#'>{userData.name + ' ' + userData.lastname}</a></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AsideContacts
