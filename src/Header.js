import React from 'react'

import logo from './logo.svg'

export default function Header () {
  return (
    <div>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2><code>aws-iot-device-sdk / create-react-app</code></h2>
      </div>
      <p className='App-intro'>
        This is an example of using the <code>aws-iot-device-sdk</code> package within a <code>create-react-app</code> project.
      </p>
      <p>
        This project is avilable throught the <a href='https://opensource.org/licenses/MIT'>MIT license</a> on <a href='https://github.com/conroywhitney/aws-iot-device-sdk-create-react-app'>github</a>.
      </p>
    </div>
  )
}
