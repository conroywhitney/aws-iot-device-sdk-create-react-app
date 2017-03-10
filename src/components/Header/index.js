import React from 'react'

import logo from './logo.svg'
import './styles.css'

export default function Header () {
  return (
    <div>
      <div className='Header-container'>
        <img src={logo} className='Header-logo' alt='logo' />
        <div className='Header-text'>React Chat w/ AWS IoT</div>
      </div>
    </div>
  )
}
