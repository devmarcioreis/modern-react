import React from 'react'
import './modern.css'
import { Feature } from '../../components'


const Modern = () => {
  return (
    <div className='modern__main section__margin' id='info'>
        <div className="modern__main-feature">
            <Feature />
        </div>
        <div className="modern__main-heading">
          <h1 className='gradient__text'>As possibilidades estão ao seu alcançe.</h1>
          <p>Saiba mais</p>
        </div>
        <div className="modern__main-container">
          <Feature />
          <Feature />
          <Feature />
        </div>
    </div>
  )
}

export default Modern