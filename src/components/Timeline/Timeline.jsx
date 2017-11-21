import React, {Component} from 'react'

import {Media} from 'react-bootstrap'

import {getMessages} from '../../services/GetMessages.js'

import './Timeline.css'

class Timeline extends Component {
  constructor (props) {
    super(props)
    this.state = {
      conversations: [{
        _id: '',
        messages: [{
          name: '',
          lastname: '',
          profile_img: '',
          id: '',
          message: '',
          createAt: ''
        }]
      }]
    }
  }

  componentWillMount () {
    getMessages ()
    .then(data => {
      console.log(data)
      this.setState({
        conversations: data.map(conversation => {
          return ({
            _id: conversation._id,
            messages: conversation.messages.map(message => {
              return ({
                id: message.author._id && message.author._id || '',
                name: message.author.name && message.author.name || '',
                lastname: message.author.lastname && message.author.lastname || '',
                profile_img: message.author.profile_img && message.author.profile_img || '',              
                message: message.body && message.body || '',
                createAt: message.createAt && message.createAt || ''
              })
            })
          })
        })
      })
    })
  }

  render () {
    return (
      <div className='Timeline-content'>
        <h3>Your conversations (<span>6</span>)</h3>
        <div className='timeline-messages'>
          {this.state.conversations.map(conversation => {
            return (
              conversation.messages.map(message => {
              console.log(message)
                return(
                  <Media>
                    <Media.Left>
                      <img width={64} height={64} src={message.profile_img} alt='user-profile-img' />
                    </Media.Left>
                    <Media.Body className='timeline-body'>
                      <Media.Heading>{message.name} {message.lastname}</Media.Heading>
                      <p>{message.message}</p>
                    </Media.Body>
                  </Media>
                )
              })
            )       
          })}
        </div>
      </div>
    )
  }

}

export default Timeline







