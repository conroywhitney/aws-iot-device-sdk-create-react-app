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
      <div className='Header-intro'>
        <p>
          This is an example of using the <code>aws-iot-device-sdk</code> package within a <code>create-react-app</code> project.
        </p>
        <p>
          This project is avilable throught the <a href='https://opensource.org/licenses/MIT'>MIT license</a> on <a href='https://github.com/conroywhitney/aws-iot-device-sdk-create-react-app'>github</a>.
        </p>
      </div>
    </div>
  )
}
