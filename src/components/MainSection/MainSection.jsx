import React, { Component } from 'react'
import { Row, Grid, Col } from 'react-bootstrap'

import Suggestions from 'components/Suggestions/Suggestions.jsx'
import AsideJobs from 'components/AsideJobs/AsideJobs.jsx'
import InputSearchForm from 'components/InputSearchForm/InputSearchForm.jsx'
import Timeline from 'components/Timeline/Timeline.jsx'
import AsideFriends from 'components/AsideFriends/AsideFriends.jsx'
import AsideSuggestions from 'components/AsideSuggestions/AsideSuggestions.jsx'

import { GetAllUsers } from 'services/UserDataServices.js'

import './MainSection.css'

class MainSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newFriend: ''
    }
  }

  addNewFriend = (props) => {
   this.setState({ newFriend: props})
  }

  componentWillMount = async () => {
    const users = await GetAllUsers()
    this.setState({
      contacts: users.map(user => {
        return ({
          id: user._id,
          name: user.name,
          lastname: user.lastname,
          profileImg: user.profileImg,
          occupation: user.occupation
        })
      })   
    })
  }

  render () {
    return (
      <div>
        <Grid>
          <Row >
            <Col xs={12} sm={12} md={8} mdOffset={2} >
              <InputSearchForm />
            </Col>
          </Row>
          <Suggestions addFriend={this.addNewFriend.bind(this)} showUsers={this.state.contacts} />
          <Row>
            <Col xs={12} md={3}className='Aside'>
              <AsideJobs newFriend={this.state.newFriend} />
              <AsideFriends newFriend={this.state.newFriend} />
              <AsideSuggestions newFriend={this.state.newFriend} />
            </Col>
            <Col xs={12} md={9}>
              <Timeline />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default MainSection
