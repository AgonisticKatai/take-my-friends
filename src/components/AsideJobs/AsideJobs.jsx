import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

import {getFriends} from '../../services/GetFriends.js'

import './AsideJobs.css'

class AsideJobs extends Component {
  constructor () {
    super()
    this.state = {
      job: '',
      fireRedirect: false,
      jobs: []
    }
  }

  componentWillMount () {
    getFriends()
    .then(data => {
      this.setState({
        jobs: data.map(contact => {
          return contact.occupation && contact.occupation || 'not defined'
        })
      })
    })
  }

  render () {
    const { fireRedirect, job } = this.state
    const jobsContainer = this.state.jobs.reduce((acc, job) => {
      if (!acc.includes(job)) {
          acc.push(job);
      }
    return acc
    }, [])

    return (
      <div className='AsideJobs'>
        <h3>Categories (<span>{jobsContainer.length}</span>)</h3>
        <ul className='Aside-jobs-list nav nav-pills nav-stacked'>
          {jobsContainer.map((job, index) => {
            return (
              <li key={index} onClick={() => this.setState({ job: job, fireRedirect: true })} role='presentation'><a>{job}</a></li>
            )
          })}
        </ul>
        {fireRedirect && <Redirect to={`/find/${job}`} push />}
      </div>
    )
  }
}
export default AsideJobs
