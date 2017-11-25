import React, { Component } from 'react'
import { Media, Button, Tabs, Tab } from 'react-bootstrap'
import Moment from 'react-moment'

import { GetInboxMessages, RemoveInboxMessageById } from 'services/UserDataServices.js'

class InboxMessages extends Component {
  constructor (props) {
    super(props)
    this.state = {
      removed: false,
      inbox: [{
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
    await this.getInboxMessages()
  }

  componentDidUpdate = async () => {
    if (this.state.removed) {
      await this.getInboxMessages()
    }
  }

  getInboxMessages = async () => {
    const inboxMessages = await GetInboxMessages()
    this.setState({
      removed: false,
      inbox: inboxMessages.map(inbox => {
        return ({
          _id: inbox._id,
          messages: inbox.messages.map(message => {
            return ({
              id: message.author._id || '',
              name: message.author.name || '',
              lastname: message.author.lastname || '',
              profileImg: message.author.profileImg || '',
              message: message.body || '',
              createdAt: message.createdAt || ''
            })
          })
        })
      })
    })
  }

  removeConversation = async (id) => {
    await RemoveInboxMessageById(id)
  this.setState({ removed: true })
  }

  responseMessage = id => {
    
  }

  render () {
    return (
      <div className='timeline-messages'>
        { this.state.inbox.map((inbox_conversation, index) => {
          return (
            inbox_conversation.messages.map((inbox_message, index) => {
              return (
                <Media key={index} className='timeline-message'>
                  <Media.Left>
                    <img width={64} height={64} src={inbox_message.profileImg} alt='user-profile-img' />
                  </Media.Left>
                  <Media.Body className='timeline-body'>
                    <Media.Heading>{ inbox_message.name } { inbox_message.lastname }</Media.Heading>
                    <p>{ inbox_message.message }</p>
                    <Button bsSize='xs' bsStyle='default' onClick={() => this.removeConversation(inbox_conversation._id)} className='pull-right' >
                      <span className='glyphicon glyphicon-trash' saria-hidden='true' />
                    </Button>
                    <Button bsSize='xs' bsStyle='danger' onClick={() => this.responseMessage(inbox_message.author)} className='response-messages-button pull-right'>response this message to { inbox_message.name }</Button>
                    <p className='date'>message received <Moment fromNow date={inbox_message.createdAt} /></p>
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

export default InboxMessages
