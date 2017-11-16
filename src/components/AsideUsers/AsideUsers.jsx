import React, {Component} from 'react'

import {getUsersData} from '../../services/ContactsAPI.js'

import './AsideUsers.css'

class AsideUsers extends Component {
  constructor () {
    super()
    this.state = {
      contacts: [{
        occupation: ''
      }]
    }
  }
  componentWillMount () {
    getUsersData()
    .then(data => {
      this.setState({
        contacts: data.map(contact => {
          return ({
            occupation: contact.occupation && contact.occupation || 'not defined'
          })
        })
      })
    })
  }
  render () {
    return (
      <div className='AsideUsers'>
        <h3>Categories (<span>{this.state.contacts.length}</span>)</h3>
        <ul className='nav nav-pills nav-stacked'>
          {this.state.contacts.map((userData, index) => {
            return (
              <li key={index} role='presentation'><a href='#'>{userData.occupation}</a></li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default AsideUsers
