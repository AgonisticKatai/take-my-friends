import React from 'react'

import {Row, Col, Thumbnail, Button, Glyphicon} from 'react-bootstrap'

import './Suggestions.css'

const SuggestionsHome = () => {
  return (
    <Row>
      <Col xs={2} md={1} className='glyphicon-align'>
        <Glyphicon glyph='glyphicon glyphicon-chevron-left' />
      </Col>
      <Col xs={4} md={2}>
        <Thumbnail className='thumbnail-suggestion' src="https://pbs.twimg.com/profile_images/378800000141171995/212990d8e6f9291653291d2ea472ae98.jpeg" alt="user-profile-img">
          <h3>Raquel</h3>
          <h3>Fernández</h3>
          <p>Perfurmer</p>
          <p>
            <Button bsStyle="primary" bsSize='xsmall'>Connect</Button>&nbsp;
            <Button bsStyle="default" bsSize='xsmall'>View profile</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={4} md={2}>
        <Thumbnail className='thumbnail-suggestion' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnE5ZCCSqwWBosaT4qBtf6URI15b-AYBbAV7h4LYn1OfbGVdhs" alt="user-profile-img">
          <h3>Alejandro</h3>
          <h3>Torrella</h3>
          <p>Goalkeeper</p>
          <p>
            <Button bsStyle="primary" bsSize='xsmall'>Connect</Button>&nbsp;
            <Button bsStyle="default" bsSize='xsmall'>View profile</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={4} md={2}>
        <Thumbnail className='thumbnail-suggestion' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Yw_HDTg2JfsQIgVdVxOgUvl6FbvHk6FQpH2DOkf4LEWKqj3k" alt="user-profile-img">
          <h3>Irene</h3>
          <h3>Torrella</h3>
          <p>Handball player</p>
          <p>
            <Button bsStyle="primary" bsSize='xsmall'>Connect</Button>&nbsp;
            <Button bsStyle="default" bsSize='xsmall'>View profile</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={4} md={2}>
        <Thumbnail className='thumbnail-suggestion' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQ5PTEYECCCy1aA6HgBcBifystIxnTDtoOFGF8TZVZiD8MNme" alt="user-profile-img">
          <h3>Nacho</h3>
          <h3>Torrella</h3>
          <p>Developer</p>
          <p>
            <Button bsStyle="primary" bsSize='xsmall'>Connect</Button>&nbsp;
            <Button bsStyle="default" bsSize='xsmall'>View profile</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={4} md={2}>
        <Thumbnail className='thumbnail-suggestion' src="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" alt="user-profile-img">
          <h3>Marcel</h3>
          <h3>Navarro</h3>
          <p>E-commerce</p>
          <p>
            <Button bsStyle="primary" bsSize='xsmall'>Connect</Button>&nbsp;
            <Button bsStyle="default" bsSize='xsmall'>View profile</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={2} md={1} className='glyphicon-align'>
        <Glyphicon glyph='glyphicon glyphicon-chevron-right' />
      </Col>
    </Row>
  )
}

export default SuggestionsHome
