import React from 'react'
import './header.css'
import ai from '../../assets/face.png'

const Header = () => {
  return (
    <div className='modern__header section__padding' id='home'>
      <div className="modern__header-content">
        <h1 className='gradient__text'>Vamos construir algo moderno e incrivel</h1>
        <p>
        Tenho paixão por tecnologia, e ela me faz ter vontade de trabalhar e estudar cada vez mais para solucionar os mais variados tipos de problemas na área de desenvolvimento.</p>
        <div className="modern__header-content__input">
          <input type="email" placeholder='Seu email' />
          <button type='button'>Enviar</button>
        </div>
        <div className="modern__header-image">
          <img src={ai} alt="Face img" />
        </div>
      </div>
    </div>
  )
}

export default Header