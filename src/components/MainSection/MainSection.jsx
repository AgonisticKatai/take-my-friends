import React from 'react'
import { Row, Grid, Col } from 'react-bootstrap'

import Suggestions from 'components/Suggestions/Suggestions.jsx'
import AsideJobs from 'components/AsideJobs/AsideJobs.jsx'
import InputSearchForm from 'components/InputSearchForm/InputSearchForm.jsx'
import Timeline from 'components/Timeline/Timeline.jsx'
import AsideFriends from 'components/AsideFriends/AsideFriends.jsx'

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
