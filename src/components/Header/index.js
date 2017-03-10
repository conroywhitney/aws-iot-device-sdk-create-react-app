import React from 'react'

import logo from './logo.svg'
import './styles.css'

export default function Header () {
  return (
    <div>
      <div className='Header-container'>
        <img src={logo} className='Header-logo' alt='logo' />
        <h2><code>aws-iot-device-sdk / create-react-app</code></h2>
      </div>
    </div>
  )
}
