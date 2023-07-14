import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z3et0nn', 'template_ag6dbjs', form.current, 'fo7a-h0il6rXHj-w8')
      
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>beingasim12345@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>Send a Message</a>

          </article>
          <article className="contact_option">
            <AiFillFacebook className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Asim Gyawali</h5>
            <a href="https://www.facebook.com/bi.asim.7" target='_blank'>Send a Message</a>

          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>9817408683</h5>
            <a href="#" target='_blank'>Send a Message</a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter Your Full Name" required/>
          <input type="email" name="email" placeholder="Enter Your Email" required/>
          <textarea name="message" rows="7" placeholder="Enter Your Message" required/>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact