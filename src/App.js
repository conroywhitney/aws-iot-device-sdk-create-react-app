import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IoT from './aws/iot'

const logger = () => (...message) => console.log('App', ...message)

class App extends Component {
  connectIoT() {
    const credentials = {
      iotEndpoint: '',
      region: '',
      awsAccessKey: '',
      awsSecretAccessKey: '',
      sessionToken: ''
    }
    const topic = 'example/topic'
    const handlers = {
      onClose: () => logger('handler', 'onClose'),
      onConnect: () => logger('handler', 'onConnect'),
      onMessage: message => logger('handler', 'onMessage', message)
    }

    IoT.connect({ credentials, topic, handlers })
  }

  render() {
    // this.connectIoT()

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><code>aws-iot-device-sdk / create-react-app</code></h2>
        </div>
        <p className="App-intro">
          This is an example of using the <code>aws-iot-device-sdk</code> package within a <code>create-react-app</code> project.
        </p>
        <p>
          Specifically, this is in regards to <a href="https://github.com/aws/aws-iot-device-sdk-js/issues/117">Issue #117</a> and <a href="https://github.com/aws/aws-iot-device-sdk-js/pull/118">Pull Requst #118</a> of the <a href="https://github.com/aws/aws-iot-device-sdk-js">aws-iot-device-sdk-js</a> repository.
        </p>
        <p>
          This project is avilable throught the <a href="https://opensource.org/licenses/MIT">MIT license</a> on <a href="https://github.com/conroywhitney/aws-iot-device-sdk-create-react-app">github</a>.
        </p>
      </div>
    );
  }
}

export default App;
