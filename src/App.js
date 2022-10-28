import React from 'react'

import { Blog, Features, Footer, Header, Possibility } from './containers'
import { CTA, Brand, Navbar } from './components/'

import './App.css'
import './index.css'

const App = () => {
  return (

    <div className='app'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>

  )
}

export default App