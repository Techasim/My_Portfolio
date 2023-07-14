import React from 'react'
import './testimonials.css'
import ME1 from '../../assets/c1.jpg'
import ME2 from '../../assets/c2.jpg'
import ME3 from '../../assets/c3.jpg'
import ME4 from '../../assets/c4.jpg'
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

       <Swiper className="container testimonials_container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
         
        >
          
          {/* <Swiper className="testimonial"> */}
            <SwiperSlide>
          <div className="client_avatar">
            <img src={ME1}/>

          </div>
          <div class="client_box">
          <h5 className="client_name">Bikalpa khadka, Hydro Consult Engineer</h5>
            <small className="client_review">
            I had the pleasure of working with Asim Gyawali as my web developer, and I am extremely satisfied with his work. Asim is not only friendly and approachable but also demonstrates a high level of professionalism and dedication to his craft. He is always willing to go the extra mile to ensure that the project is completed successfully and to the client's satisfaction.
            </small>
          </div>
           
            </SwiperSlide>
          
      
          <SwiperSlide>
          <div className="client_avatar">
            <img src={ME2}/>

          </div>
          <div class="client_box">
          <h5 className="client_name">Bishal Pandey, Project Manager at Min Energy</h5>
            <small className="client_review">
            Asim's talent as a web developer is truly remarkable. His technical skills and expertise are evident in the seamless and efficient websites he creates. He has a keen eye for detail, producing visually appealing designs and implementing intuitive user experiences.
            </small>
          </div>
           
            </SwiperSlide>
            <SwiperSlide>
          <div className="client_avatar">
            <img src={ME4}/>

          </div>
          <div class="client_box">
            <h5 className="client_name">Prabin, UAV Pilot</h5>
            <small className="client_review">
            I highly recommend Asim Gyawali as a web developer. His friendly nature, hard work, and exceptional talent make him a valuable asset to any project.
            </small>
          </div>  
            </SwiperSlide>
          
      
            <SwiperSlide>
          <div className="client_avatar">
            <img src={ME3}/>

          </div>
          <div class="client_box">
            <h5 className="client_name">Pawan</h5>
            <small className="client_review">
            What sets Asim apart is his work ethic and determination. He is a hardworking individual who consistently meets deadlines and surpasses expectations.
            </small>
          </div>
         
            </SwiperSlide>
            
          
          </Swiper>
       
            
          
        
      
    </section>
  )
}

export default Testimonials