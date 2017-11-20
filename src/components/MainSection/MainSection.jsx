import React from 'react'

import {Row, Grid, Col} from 'react-bootstrap'

import Suggestions from '../Suggestions/Suggestions.jsx'
import AsideJobs from '../AsideJobs/AsideJobs.jsx'
import InputSearchForm from '../InputSearchForm/InputSearchForm.jsx'
import Timeline from '../Timeline/Timeline.jsx'
import AsideFriends from '../AsideFriends/AsideFriends.jsx'

import './MainSection.css'

const MainSection = () => {
  return (
    <div>
      <Grid>
      <Suggestions />
        <Row >
          <Col xs={3} className='Aside'>
            <AsideJobs />
            <AsideFriends />
          </Col>
          <Col xs={7} >
            <InputSearchForm />
          </Col>
          <Col xs={9} >
            <Timeline />
          </Col>
        </Row>
      </Grid>
    </div>   
  )
}

export default MainSection
