import React, { Component } from 'react'
import { Media, Button, Tabs, Tab } from 'react-bootstrap'
import Moment from 'react-moment'

import { GetOutBoxMessages, RemoveOutboxMessageById } from 'services/UserDataServices.js'

class OutBoxMessages extends Component {
  constructor (props) {
    super(props)
    this.state = {
      outbox: [{
        _id: '',
        messages: [{
          name: '',
          lastname: '',
          profileImg: '',
          id: '',
          message: '',
          createdAt: ''
        }]
      }]
    }
  }

  componentWillMount = async () => {
    const outBoxMessages = await GetOutBoxMessages()
    this.setState({
      outbox: outBoxMessages.map(outBox => {
        return ({
          _id: outBox._id,
          messages: outBox.messages.map(message => {
            return ({
              id: message.adresseer._id || '',
              name: message.adresseer.name || '',
              lastname: message.adresseer.lastname || '',
              profileImg: message.adresseer.profileImg || '',
              message: message.body || '',
              createdAt: message.createdAt || ''
            })
          })
        })
      })
    })
  }

  responseMessage = id => {
    
  }

  removeConversation = async (id) => {
    await RemoveOutboxMessageById(id)
  }

  render () {
    return (
      <div className='timeline-messages'>
        { this.state.outbox.map((outbox_conversation, index) => {
          return (
            outbox_conversation.messages.map((outbox_message, index) => {
              return (
                <Media key={index} className='timeline-message'>
                  <Media.Left>
                    <img width={64} height={64} src={outbox_message.profileImg} alt='user-profile-img' />
                  </Media.Left>
                  <Media.Body className='timeline-body'>
                    <Media.Heading>{ outbox_message.name } { outbox_message.lastname }</Media.Heading>
                    <p>{ outbox_message.message }</p>
                    <Button bsSize='xs' bsStyle='default' onClick={() => this.removeConversation(outbox_conversation._id)} className='pull-right' >
                      <span className='glyphicon glyphicon-trash' saria-hidden='true' />
                    </Button>
                    <Button bsSize='xs' bsStyle='danger' onClick={() => this.responseMessage(outbox_message.author)} className='response-messages-button pull-right'>send another message to { outbox_message.name }</Button>
                    <p className='date'>message sent <Moment fromNow date={outbox_message.createdAt} /></p>
                  </Media.Body>
                </Media>
              )
            })
          )
        })}
      </div>
    )
  }
}

export default OutBoxMessages
