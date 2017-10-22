import React from 'react'

import './AsideContacts.css'

const AsideContacts = () => {
  return (
    <div className='AsideContacts'>
      <h3>My contacts (<span>44</span>)</h3>
      <ul className='nav nav-pills nav-stacked'>
        <li role='presentation'><a href='#'>Raquel Fernández</a></li>
        <li role='presentation'><a href='#'>Nacho Torrella</a></li>
        <li role='presentation'><a href='#'>Alex Torrella</a></li>
        <li role='presentation'><a href='#'>Irene Torrella</a></li>
        <li role='presentation'><a href='#'>Marcel Navarro</a></li>
        <li role='presentation'><a href='#'>Carolina Caro</a></li>
      </ul>
    </div>
  )
}

export default AsideContacts
