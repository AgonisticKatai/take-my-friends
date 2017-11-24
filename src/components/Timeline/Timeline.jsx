import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import InBoxMessages from 'components/InBoxMessages/InBoxMessages.jsx'
import OutBoxMessages from 'components/OutBoxMessages/OutBoxMessages.jsx'

import './Timeline.css'

class Timeline extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }  
  }

  getInitialState = () => {
    return {
      key: 1
    }
  }

  handleSelect = key => {
    this.setState({ key })
  }

  render () {
    return (
      <div className='Timeline-content'>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id='controlled-tab-example'>
          <Tab eventKey={1} title='Inbox messages'>
            <InBoxMessages />
          </Tab>
          <Tab eventKey={2} title='Outbox messages'>
            <OutBoxMessages />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Timeline
