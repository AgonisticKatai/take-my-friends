import React from 'react'

import {Media} from 'react-bootstrap'

import './Timeline.css'

const Timeline = () => {
  return (
    <div className='Timeline-content'>
      <h3>Your conversations (<span>6</span>)</h3>
      <Media>
        <Media.Left>
          <img width={64} height={64} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Yw_HDTg2JfsQIgVdVxOgUvl6FbvHk6FQpH2DOkf4LEWKqj3k' alt='user-profile-img' />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Irene Torrella</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left>
          <img width={64} height={64} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQ5PTEYECCCy1aA6HgBcBifystIxnTDtoOFGF8TZVZiD8MNme' alt='user-profile-img' />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Nacho Torrella</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          <Media>
            <Media.Left>
              <img width={64} height={64} src='https://pbs.twimg.com/profile_images/378800000141171995/212990d8e6f9291653291d2ea472ae98.jpeg' alt='user-profile-img' />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Raquel Fernández</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </Media.Body>
          </Media>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left>
          <img width={64} height={64} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnE5ZCCSqwWBosaT4qBtf6URI15b-AYBbAV7h4LYn1OfbGVdhs' alt='user-profile-img' />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Alejandro Torrella</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left>
          <img width={64} height={64} src='http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg' alt='user-profile-img' />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Marcel Navarro</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          <Media>
            <Media.Left>
              <img width={64} height={64} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQ5PTEYECCCy1aA6HgBcBifystIxnTDtoOFGF8TZVZiD8MNme' alt='user-profile-img' />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Nacho Torrella</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </Media.Body>
          </Media>
        </Media.Body>
      </Media>
    </div>
  )
}

export default Timeline
