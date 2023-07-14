import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1}/>

          </div>
          <h3>My fully responsible travel website. </h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Techasim" className="btn" target='_blank'>Github </a>
          <a href="https://www.linkedin.com/in/asim-gyawali-2387701b9/" className="btn btn-primary" target='_blank'>Linkedin </a>
          
          

          </div>

        
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2}/>

          </div>
          <h3>My fully responsive news website. </h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Techasim" className="btn" target='_blank'>Github </a>
          <a href="https://www.linkedin.com/in/asim-gyawali-2387701b9/" className=" btn btn-primary" target='_blank'>Linkedin </a>
          
          

          </div>

        
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3}/>

          </div>
          <h3>Fully responsive E-commerce Website. </h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Techasim" className="btn" target='_blank'>Github </a>
          <a href="https://www.linkedin.com/in/asim-gyawali-2387701b9/" className=" btn btn-primary" target='_blank'>Linkedin </a>
          
          

          </div>

        
        </article>
      </div>
    </section>
  )
}

export default Portfolio