import React from 'react'

import { Blog, Features, Footer, Header, Possibility, Modern } from './containers'
import { CTA, Brand, Navbar } from './components/'

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
        <Modern />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>

  )
}

export default App