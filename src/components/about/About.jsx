import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FiAward} from 'react-icons/fi'
import {AiOutlineUserDelete} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'

const About = () => {
  return (
<section id="about">
  <h4>Get To Know</h4>
  <h1>About Me</h1>

  <div className="container about_container">
    <div className="about_me">
      <div className="about_me-img">
        <img src={ME}></img>
      </div>
    </div>
    <div className="about_content">
      <div className="about_card">
        <article className='about_card'>
          <FiAward className="about_icon"/>
          
          <h5>Experience</h5>
          <small>2+ years of working</small>
        </article>
        <article className='about_card'>
          <AiOutlineUserDelete className="about_icon"/>
          <h5>Clients</h5>
          <small>13+ clients</small>
        </article>
        <article className='about_card'>
          <GrProjects className="about_icon" />
          <h5>Projects</h5>
          <small>20+</small>
        </article>
      </div>
      <p>I am skilled in creating and maintaining websites and web applications.My expertise lies in both front-end and back-end development.</p>
      <a href="#contact" className='btn btn-primary'>Let's Connect</a>
      </div>
  </div>




</section>  )
}

export default About