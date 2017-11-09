import React from 'react'

import {Row, Col} from 'react-bootstrap'

import Suggestions from '../Suggestions/Suggestions.jsx'
import AsideUsers from '../AsideUsers/AsideUsers.jsx'
import InputSearchForm from '../InputSearchForm/InputSearchForm.jsx'
import Timeline from '../Timeline/Timeline.jsx'
import AsideContacts from '../AsideContacts/AsideContacts.jsx'

import './MainSection.css'

const MainSection = () => {
  return (
    <div>
      <Suggestions />
      <Row className='no-padding'>
        <Col xs={4} md={2} className='no-padding'>
          <AsideUsers />
        </Col>
        <Col xs={4} md={8} className='no-padding'>
          <InputSearchForm />
          <Timeline />
        </Col>
        <Col xs={4} md={2} className='no-padding'>
          <AsideContacts />
        </Col>
      </Row>
    </div>
  )
}

export default MainSection
