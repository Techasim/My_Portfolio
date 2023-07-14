import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Asim Gyawali</h1>
        <h2 className="text-light">Web Developer</h2>
        <CTA/>
        <HeaderSocial/>
      </div>
      <div className="me">
        <img src={ME}/>
      </div>
      < a href="#contact" className='scroll_down'>Scroll Down</a>
      
    </header>
  )
}

export default Header