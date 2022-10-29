import React from 'react'

import { Header } from './containers'
import { Brand, Navbar } from './components/'

import './App.css'
import './index.css'

const App = () => {
  return (

    <div className='app'>
        <div>
          <Navbar />
          <Header />
        </div>
        <Brand />
    </div>

  )
}

export default App