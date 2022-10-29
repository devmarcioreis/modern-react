import React, { useState } from 'react'
import './navbar.css'

import { RiMenu3Line,  RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#info">Modern</a></p>
    <p><a href="#about">Sobre</a></p>
    <p><a href="#services">Serviços</a></p>
    <p><a href="#clients">Clientes</a></p>
    <p><a href="#contact">Contato</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='modern__navbar'>
      <div className='modern__navbar-links'>
        <div className='modern__navbar-links_logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className="modern__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="modern__navbar-sign">
        <p>Cadastro</p>
        <button type='button'>Acessar</button>
      </div>
      <div className="modern__navbar-menu">
        {
          toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={ () => setToggleMenu(false)} /> 
          : <RiMenu3Line color='#fff' size={27} onClick={ () => setToggleMenu(true)} /> 
        }
        {
          toggleMenu && (
            <div className='modern__navbar-menu_container scale-up-center'>
              <div className='modern__navmenu-menu_container-links'>
                <Menu />
                <div className="modern__navbar-menu_container-links-sign">
                  <p>Cadastro</p>
                  <button type='button'>Acessar</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar