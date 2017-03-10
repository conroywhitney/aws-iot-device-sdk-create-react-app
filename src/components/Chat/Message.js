import React, { Component } from 'react'

class Message extends Component {
  render () {
    const { content, id, timestamp, username } = this.props

    return (
      <div className='Chat-message' data-id={id} data-timestamp={timestamp}>
        <b>{username}</b>: {content}
      </div>
    )
  }
}

Message.propTypes = {
  content: React.PropTypes.string,
  id: React.PropTypes.string,
  timestamp: React.PropTypes.number,
  username: React.PropTypes.string
}

export default Message
