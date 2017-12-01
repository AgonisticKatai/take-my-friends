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
          <div className='about-text'>
            <p>It is the application that I have presented as the final project of the <span>Skylab Coders Academy</span> bootcamp.</p>
            <p>It is based on an idea similar to Facebook and LinkedIn through which we can create a social network of friends in which to find who works in a particular sector. The idea is to find in your circle of friends who works in a certain sector and to be able to contact with him to request some kind of collaboration.</p>
            <p>Through a quick registration form we can access the main page in which we will see a series of <span>friendship suggestions</span>, see your personal profile and add to our list of contacts.</p>
            <p>Once it is our contact we can send you messages that you will receive in your inbox section.</p>
            <p>After adding a friend, we will automatically suggest a series of contacts in the section '<span>Do You Know them?</span>' which shows possible friendships among those who have already added our contacts.</p>
            <p>In the section '<span>Categories</span>' will be shown a list of all the trades of our contacts and clicking on any of them we can see how many of our friends have that same profession and get in touch with them.</p>
            <p>Finally we have a search bar in which we can enter a type of work and see how many coincidences there are among our friends.</p>              
          </div>
          <PageHeader><small>powered by:</small></PageHeader>
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
        </Grid>       
      </div>
    )
  }
}

export default About
