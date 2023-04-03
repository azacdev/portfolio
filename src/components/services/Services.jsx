import React, { useState } from 'react'
import './Services.css'

const Services = () => {
  const [toggle, setToggle] = useState(0)

  const toggleTab = (index) => {
    setToggle(index)
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className='uil uil-web-grid services__icon'></i>
              <h3 className='services__title'>
                Web <br/> Developement Services
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
            <i className="uil uil-arrow-right services__button-icon "></i>
            </span>

            <div className={toggle === 1 
              ? "services__modal active-modal" 
              : "services__modal"}
              >
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">
                  Website Development Services
                </h3>
                <p className="services__modal-description">
                  Service with more than 2 years of experience.Providing quality work to clients and companies.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      Website design and development
                    </p>                  
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      E-commerce website development
                    </p>                  
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      Mobile-friendly website development
                    </p>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className='uil uil-arrow services__icon'></i>
              <h3 className='services__title'>
              Custom  <br/> Web Application Development
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
            <i className="uil uil-arrow-right services__button-icon "></i>
            </span>

            <div className={toggle === 2
              ?"services__modal active-modal"
              : "services__modal"}
              >
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">
                  Custom Web Application Development
                </h3>
                <p className="services__modal-description">
                  Service with more than 3 years of experience.Providing quality work to clients and companies.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      Custom web application development
                    </p>                  
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      Content management system (CMS) development
                    </p>                  
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      Website hosting and migration
                    </p>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i class="uil uil-setting services__icon"></i>
              <h3 className='services__title'>
                Website <br/> Maintenance and Support
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
              View More
            <i className="uil uil-arrow-right services__button-icon "></i>
            </span>

            <div className={toggle === 3 ? 
              "services__modal active-modal" 
              : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">
                  Website Maintenance and Support
                </h3>
                <p className="services__modal-description">
                  Service with more than 3 years of experience.Providing quality work to clients and companies.
                </p>


                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      Website maintenance and support
                    </p>                  
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      Search engine optimization (SEO)
                    </p>                  
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      Website analytics and reporting
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      Ensure cross-browser compatibility
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal_info">
                      Technical support and troubleshooting
                    </p>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Services