import React, {Component} from 'react'

import {getFriends} from '../../services/GetFriends.js'

import './AsideContacts.css'

class AsideContacts extends Component {
  constructor () {
    super()
    this.state = {
      contacts: [{
        name: '',
        lastname: '',
        profile_img: ''
      }]
    }
  }
  componentWillMount () {
    getFriends()
    .then(data => {
      this.setState({
        contacts: data.map(contact => {
          return ({
            name: contact.name && contact.name || '',
            lastname: contact.lastname && contact.lastname || 'not defined',
            profile_img: contact.profile_img && contact.profile_img || 'http://www.cdn.innesvienna.net//Content/user-default.png',
          })
        })
      })
    })
  }
  render () {
    return (
      <div className='AsideContacts'>
        <h3>My friends (<span>{this.state.contacts.length}</span>)</h3>
        <ul className='nav nav-pills nav-stacked' >
          {this.state.contacts.map((userData, index) => {
            return (
              <li key={index} className='aside-li'>
                <a href=""><img className='friend-image' src={userData.profile_img} /> {userData.name + ' ' + userData.lastname}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AsideContacts
