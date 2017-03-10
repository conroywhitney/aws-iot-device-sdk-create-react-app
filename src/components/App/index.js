import React, { Component } from 'react'

import credentials from '../../aws/credentials'

import Chat from '../Chat'
import Header from '../Header'

import './styles.css'

class App extends Component {
  render () {
    return (
      <div className='App-container'>
        <Header />
        <Chat credentials={credentials} topic='example/chat' />
      </div>
    )
  }
}

export default App
