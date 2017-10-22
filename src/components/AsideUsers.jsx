import React from 'react'

import './AsideUsers.css'

const AsideUsers = () => {
  return (
    <div className='AsideUsers'>
      <h3>Categories (<span>23</span>)</h3>
      <ul className='nav nav-pills nav-stacked'>
        <li role='presentation'><a href='#'>Lawyer</a></li>
        <li role='presentation'><a href='#'>Developer</a></li>
        <li role='presentation'><a href='#'>Doctor</a></li>
        <li role='presentation'><a href='#'>Teacher</a></li>
        <li role='presentation'><a href='#'>Mechanic</a></li>
        <li role='presentation'><a href='#'>Hairdresser</a></li>
      </ul>
    </div>
  )
}

export default AsideUsers
