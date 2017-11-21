import React, { Component } from 'react'
import Moment from 'react-moment'
import { Media, Button } from 'react-bootstrap'

import { getMessages } from 'services/UserDataServices.js'

import './Timeline.css'

class Timeline extends Component {
  constructor (props) {
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
          createdAt: ''
        }]
      }]
    }
  }

  componentWillMount () {
    getMessages()
    .then(data => {
      console.log(data)
      this.setState({
        conversations: data.map(conversation => {
          return ({
            _id: conversation._id,
            messages: conversation.messages.map(message => {
              return ({
                id: message.author._id || '',
                name: message.author.name || '',
                lastname: message.author.lastname || '',
                profile_img: message.author.profile_img || '',
                message: message.body || '',
                createdAt: message.createdAt || ''
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
        <h3>My conversations (<span>{ this.state.conversations.length }</span>)</h3>
        <div className='timeline-messages'>
          { this.state.conversations.map(conversation => {
            return (
              conversation.messages.map(message => {
                return (
                  <Media>
                    <Media.Left>
                      <img width={64} height={64} src={message.profile_img} alt='user-profile-img' />
                    </Media.Left>
                    <Media.Body className='timeline-body'>
                      <Media.Heading>{ message.name } { message.lastname }</Media.Heading>
                      <p>{ message.message }</p>
                      <p className='date'>message received <Moment fromNow date={message.createdAt} /></p>
                      <Button bsSize='xs'>Response this message from { message.name }</Button>
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
