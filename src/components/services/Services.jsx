import React from 'react'
import './services.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
          <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Proficiency in design software such as Sketch, Adobe XD, Figma, or InVision, as well as<br></br> graphic editing tools like Photoshop or Illustrator.</p>
            </li>

            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Developing visually appealing designs that align with the brand identity and create<br></br> a cohesive user experience.</p>
            </li>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Designing meaningful and intuitive interactions between users and digital products.</p>
            </li>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Ensuring the design is adaptable and functional across different devices and screen sizes.</p>
            </li>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Focusing on the needs, goals, and experiences of users throughout the design process.</p>
            </li>
           
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Building the client-side of a website using HTML, CSS, and JavaScript to create the user interface and implement interactivity.</p>
            </li>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Creating visually appealing and functional websites from scratch, tailored to the client's specific needs and brand identity.</p>
            </li>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Combining front-end and back-end development skills to handle both the client-side and server-side aspects of web development.</p>
            </li>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p> Ensuring that websites are designed and developed to be visually appealing and functional across different devices and screen sizes.</p>
            </li>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Assisting clients with website hosting, domain registration, and deploying websites to live servers.</p>
            </li>

          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>SEO and Digital Marketing</h3>
          </div>
          <ul className='service_list'>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Optimizing website content through keyword integration, content formatting, internal linking, and ensuring the content provides value to users.</p>
            </li>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p> Optimizing a website for local search results, especially for businesses targeting customers in specific geographical locations</p>
            </li>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Addressing technical aspects of a website, such as crawlability, site speed optimization, mobile-friendliness, URL structure, canonicalization, and XML sitemaps.</p>
            </li>
            <li>
              <AiFillCheckCircle className="service_list-icon"/>
            <p>Creating and managing online advertising campaigns, such as Google Ads or social media ads, where advertisers pay each time a user clicks on their ad.</p>
            </li>
           
          </ul>
        </article>
      </div>




    </section>
  )
}

export default Services