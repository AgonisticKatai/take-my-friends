import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { GetFriendsJobs } from 'services/UserDataServices.js'

import './AsideJobs.css'

class AsideJobs extends Component {
  constructor () {
    super()
    this.state = {
      job: '',
      newFriend: false,
      fireRedirect: false,
      jobs: []
    }
  }

  componentWillMount = async () => {
    const data = await GetFriendsJobs()
    this.setState({
      jobs: data.map(contact => {
        return contact || 'Jobless'
      })
    })
  }

  componentWillReceiveProps = async (nextProps) => {
    const newData = await GetFriendsJobs()
    this.setState({
      jobs: newData.map(contact => {
        return contact || 'Jobless'
      })
    })
  }

  render () {
    const { fireRedirect, job } = this.state
    return (
      <div className='AsideJobs'>
        <h3>Categories (<span>{ this.state.jobs.length }</span>)</h3>
        <p>Found these jobs among your friends</p>
        <ul className='Aside-jobs-list nav nav-pills nav-stacked'>
          { this.state.jobs.map((job, index) => {
            return (
              <li 
                key={index}
                onClick={() => this.setState({ job: job, fireRedirect: true })}
                role='presentation'>
                <a>{ job }</a>
              </li>
            )
          })}
        </ul>
        { fireRedirect && <Redirect to={`/find/${job}`} push /> }
      </div>
    )
  }
}
export default AsideJobs
