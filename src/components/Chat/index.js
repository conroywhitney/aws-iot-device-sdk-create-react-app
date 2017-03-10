import React, { Component } from 'react'
import { append, compose, evolve, map, pick, takeLast } from 'ramda'

import Message from './Message'

import IoT from '../../aws/iot'
import logger from '../../logger'
import { MAX_MESSAGES } from '../../constants'
import messageFixtures from '../../fixtures/messages'

import './styles.css'

class Chat extends Component {
  constructor (props) {
    super(props)

    this.state = {
      messages: messageFixtures(10)
    }
  }

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

    this.setState(
      evolve({
        messages: compose(
          takeLast(MAX_MESSAGES),
          append(message)
        )
      }, this.state)
    )
  }

  render () {
    return (
      <div className='Chat-container'>
        <div className='Chat-messages'>
          {map(message =>
            <Message key={message.id} {...message} />,
            this.state.messages
          )}
        </div>
        <div className='Chat-footer' />
      </div>
    )
  }
}

export default Chat
