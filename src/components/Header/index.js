import React from 'react'

import bee from './bee.svg'
import './styles.css'

export default function Header () {
  return (
    <div>
      <div className='Header-container'>
        <img src={bee} className='Header-logo' alt='logo' />
        <div className='Header-text'>Serverless.buzz Chat Example</div>
      </div>
    </div>
  )
}
