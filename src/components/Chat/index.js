import React, { Component } from 'react'
import { pick } from 'ramda'

import IoT from '../../aws/iot'
import logger from '../../logger'

class Chat extends Component {
  componentWillMount () {
    logger('componentWillMount', 'connecting to IoT')

    IoT.connect({
      ...pick(['credentials', 'topic'], this.props),
      handlers: {
        onClose: () => logger('handlers', 'onClose'),
        onConnect: () => logger('handler', 'onConnect'),
        onMessage: this.onIoTMessage
      }
    })

    logger('componentWillMount', 'connected to IoT')
  }

  componentWillUnmount () {
    logger('componentWillUnmount', 'disconnecting from IoT')

    IoT.disconnect()

    logger('componentWillUnmount', 'disconnected from IoT')
  }

  onIoTMessage (message) {
    logger('onIoTMessage', message)
  }

  render () {
    return (
      <div />
    )
  }
}

export default Chat
