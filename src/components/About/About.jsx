import React, { Component } from 'react'
import { PageHeader, Row, Grid, Image, Glyphicon } from 'react-bootstrap'

import NavbarHeader from 'components/Navbar/Navbar.jsx'

import { GetUserProfile } from 'services/UserDataServices'

import './About.css'

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profileImg: ''
    }
  }

  componentWillMount = async () => {
    const user = await GetUserProfile()
    this.setState({
      profileImg: user.profileImg,
    })
  }

  render () {
    return (
      <div>
        <NavbarHeader ProfileImage={this.state.profileImg} />
        <Grid>
          <PageHeader>Take My Friends <small>your social job finder</small></PageHeader>
          <PageHeader className='sub-title'><small>powered by:</small></PageHeader>
          <div className='about-images'>
            <Image className='image-w-h' src='https://s3-us-west-2.amazonaws.com/svgporn.com/logos/css-3.svg'></Image>
            <Image className='image-w-h' src='https://s3-us-west-2.amazonaws.com/svgporn.com/logos/bootstrap.svg'></Image>
            <Image className='image-w-h' src='https://s3-us-west-2.amazonaws.com/svgporn.com/logos/html-5.svg'></Image>
            <Image className='image-w-h' src='https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg'></Image>
            <Image className='image-w-h' src='https://s3-us-west-2.amazonaws.com/svgporn.com/logos/es6.svg'></Image>
            <Image className='image-w-h' src='https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png'></Image>
            <Image className='image-w-h' src='https://s3-us-west-2.amazonaws.com/svgporn.com/logos/mongodb.svg'></Image>
            <Image className='image-w-h' src='https://s3-us-west-2.amazonaws.com/svgporn.com/logos/express.svg'></Image>
            <Image className='image-w-h' src='https://s3-us-west-2.amazonaws.com/svgporn.com/logos/nodejs.svg'></Image>
          </div>
          <div className='creator-footer'>
            <Image className='creator-img' src='https://i.imgur.com/iqOIcYb.jpg'></Image>
            <p>Nacho Torrella Fernández</p>
            <p>Skylab Coders Academy</p>
            <p>Barcelona - 2017</p>
            <a href="https://github.com/AgonisticKatai">GitHub profile</a>
            <i className="fa fa-github" aria-hidden="true"></i>
          </div>
        </Grid>       
      </div>
    )
  }
}

export default About
