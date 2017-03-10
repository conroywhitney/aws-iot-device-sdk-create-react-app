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

    // start with 25 fake messages in the chat
    this.state = {
      messages: messageFixtures(25)
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

  componentDidMount () {
    this.scrollToBottom()

    // add fake messages once per second
    setInterval(() =>
      this.onIoTMessage(messageFixtures(1)[0]),
      5000
    )
  }

  componentWillUpdate () {
    const messagesDOM = this.refs.messages

    this.chatWindowAlreadyAtBottom = (messagesDOM.scrollTop + messagesDOM.offsetHeight) === messagesDOM.scrollHeight
  }

  componentDidUpdate () {
    if (this.chatWindowAlreadyAtBottom) this.scrollToBottom()
  }

  scrollToBottom () {
    const messagesDOM = this.refs.messages

    messagesDOM.scrollTop = messagesDOM.scrollHeight
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
          <div className='Chat-messages-wrapper' ref='messages'>
            {map(message =>
              <Message key={message.id} {...message} />,
              this.state.messages
            )}
          </div>
        </div>
        <div className='Chat-footer' />
      </div>
    )
  }
}

export default Chat
