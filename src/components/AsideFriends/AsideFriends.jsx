import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { getFriends } from 'services/UserDataServices.js'

import './AsideFriends.css'

class AsideFriends extends Component {
  constructor () {
    super()
    this.state = {
      id: '',
      fireRedirect: false,
      contacts: [{
        name: '',
        lastname: '',
        profileImg: ''
      }]
    }
  }

  componentWillMount = async () => {
    const data = await getFriends()
    this.setState({
      contacts: data.map(contact => {
        return ({
          id: contact._id,
          name: contact.name,
          lastname: contact.lastname,
          profileImg: contact.profileImg
        })
      })
    })
  }

  componentWillReceiveProps = async (nextProps) => {
    const newData = await getFriends()
    this.setState({
      contacts: newData.map(contact => {
        return ({
          id: contact._id,
          name: contact.name,
          lastname: contact.lastname,
          profileImg: contact.profileImg
        })
      })
    })
  }

  handleProfile = id => {
    this.setState({ fireRedirect: true, id: id })
  }

  render () {
    const { fireRedirect, id } = this.state
    return (
      <div className='AsideFriends'>
        <h3>My friends (<span>{this.state.contacts.length}</span>)</h3>
        <p>View friends profile and send a message</p>
        <ul className='Aside-friends-list nav nav-pills nav-stacked' >
          {this.state.contacts.map((userData, index) => {
            return (
              <li onClick={() => this.handleProfile(userData.id)} key={index} className='aside-li'>
                <a>
                  <img
                    className='friend-image'
                    src={userData.profileImg}
                    alt={userData.name + ' ' + userData.lastname}
                  /> { userData.name + ' ' + userData.lastname }
                </a>
              </li>
            )
          })}
        </ul>
        { fireRedirect && id && <Redirect to={`/friend_profile/${id}`} push /> }
      </div>
    )
  }
}

export default AsideFriends
