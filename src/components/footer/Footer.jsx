import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo" >Asim</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/bi.asim.7" target='_blank'>
          <AiFillFacebook/>

        </a>
        <a href="https://www.instagram.com/beingasimgyawali/" target='_blank'><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/asim-gyawali-2387701b9/" target='_blank'>
          <AiFillLinkedin/>
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; ASIM GYAWALI. All Right Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer