import React, {Component} from 'react'

import {getUsersData} from '../services/ContactsAPI.jsx'

import './AsideContacts.css'

class AsideContacts extends Component {
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
      <div className='AsideContacts'>
        <h3>My contacts (<span>{this.state.contacts.length}</span>)</h3>
        <ul className='nav nav-pills nav-stacked'>
          {this.state.contacts.map(function (userData) {
            return (
              <li role='presentation'><a href='#'>{userData.name + ' ' + userData.lastname}</a></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AsideContacts
