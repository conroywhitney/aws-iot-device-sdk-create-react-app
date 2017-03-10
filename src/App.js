import React, { Component } from 'react'

import credentials from './aws/credentials'

import Chat from './Chat'
import Header from './Header'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Chat credentials={credentials} topic='example/chat' />
      </div>
    )
  }
}

export default App
