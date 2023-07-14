import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div>
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/asim-gyawali-2387701b9/" target='_blank'><AiFillLinkedin/></a>
            <a href="https://www.facebook.com/bi.asim.7" target='_blank'><AiFillFacebook/></a>
            <a href="https://github.com/Techasim" target='_blank'><AiFillGithub/></a>
        </div>
    </div>
  )
}

export default HeaderSocials