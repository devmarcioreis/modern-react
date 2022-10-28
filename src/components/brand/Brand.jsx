import React from 'react'
import './brand.css'

import { google, react, dropbox, angular, microsoft } from './imports'

const Brand = () => {
  return (
    <div className='modern__brand section__padding'>
      <div>
        <img src={google} alt="Google logo" />
      </div>
      <div>
        <img src={react} alt="React logo" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox logo" />
      </div>
      <div>
        <img src={angular} alt="Angular logo" />
      </div>
      <div>
        <img src={microsoft} alt="Microsoft logo" />
      </div>
    </div>
  )
}

export default Brand