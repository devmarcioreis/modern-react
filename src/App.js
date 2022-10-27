import React from 'react'

import { Blog, Features, Footer, Header, Possibility } from './components/containers'
import { CTA, Brand, Navbar } from './components/'

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