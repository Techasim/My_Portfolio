import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h3>What skills i have</h3>
      <h2>My Experience</h2>

      <div className="container experience_container">

        <div className="experience_frontend">

          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" /> 
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>

              </div>
             

            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
              

            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>BootStrap</h4>
              <small className="text-light">Experienced</small>

              </div>
             
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
              </div>
              

            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon"/>
             <div>
             <h4>React Js </h4>
              <small className="text-light">Experienced</small>
             </div>

            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon"/>
             <div>
             <h4>Tailwind CSS </h4>
              <small className="text-light">Experienced</small>
             </div>

            </article>

          </div>
          </div>
          <div className="experience_backend">

            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
               <div>
               <h4>Django</h4>
                <small className="text-light">Experienced</small>
               </div>

              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                <h4>MySQL</h4>
                <small className="text-light">Moderate</small>
                </div>

              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details-icon"/>
               <div>
               <h4>Node js</h4>
                <small className="text-light">Moderate</small>
               </div>

              </article>
              
               

            </div>

          </div>
        </div>



    </section>
  
)
}

export default Experience