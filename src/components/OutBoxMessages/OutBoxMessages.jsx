import React, { Component } from 'react'
import { Media, Button, Tabs, Tab } from 'react-bootstrap'
import Moment from 'react-moment'

import { GetOutboxMessages, RemoveOutboxMessageById } from 'services/UserDataServices.js'

class OutboxMessages extends Component {
  constructor (props) {
    super(props)
    this.state = {
      removed: false,
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

  componentDidMount = async () => {
    await this.getOutboxMessages()
  }

  componentDidUpdate = async () => {
    if (this.state.removed) {
      await this.getOutboxMessages()
    }
  }

  getOutboxMessages = async () => {
    const outboxMessages = await GetOutboxMessages()
    this.setState({
      removed: false,
      outbox: outboxMessages.map(outbox => {
        return ({
          _id: outbox._id,
          messages: outbox.messages.map(message => {
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

  removeConversation = async (id) => {
    await RemoveOutboxMessageById(id)
  this.setState({ removed: true })
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

export default OutboxMessages
