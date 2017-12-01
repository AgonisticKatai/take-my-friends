import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { GetSuggestions } from 'services/UserDataServices.js'

import './AsideSuggestions.css'

class AsideSuggestions extends Component {
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
    const data = await GetSuggestions()
    this.setState({
      contacts: data.map(suggestion => {
        return ({
          id: suggestion._id,
          name: suggestion.name,
          lastname: suggestion.lastname,
          profileImg: suggestion.profileImg
        })
      })
    })
  }

  componentWillReceiveProps = async (nextProps) => {
    const newData = await GetSuggestions()
    this.setState({
      contacts: newData.map(suggestion => {
        return ({
          id: suggestion._id,
          name: suggestion.name,
          lastname: suggestion.lastname,
          profileImg: suggestion.profileImg
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
        <h3>Do you know them? (<span>{this.state.contacts.length}</span>)</h3>
        <p>Connect with friends of your friends</p>
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
        { fireRedirect && id && <Redirect to={`/profile/${id}`} push /> }
      </div>
    )
  }
}

export default AsideSuggestions
