import React, { useState } from 'react';
import './services.css'

const Services = () => {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>How I can help you</span>

      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>Frontend</h3>
          </div>

          <span className='services__button' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
              <h3 className='services__modal-title'>Frontend Development</h3>
              <p className='services__modal-description'>
                I will help to engage your customers and deliver robust user experience by building web applications, single page applications, and cross-browser and cross-platform websites using React/NextJS.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Fast Perfomance
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Cutting-edge, pixel-perfect, beautiful interfaces</p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Fast results delivery
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Easy to customize and scale
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    I will help you with design and mockups for you website
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil-arrow services__icon'></i>
            <h3 className='services__title'>UI/UX</h3>
          </div>

          <span onClick={() => toggleTab(2)} className='services__button'>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
              <h3 className='services__modal-title'>UI/UX Design</h3>
              <p className='services__modal-description'>
                I will help you to design a web interface and user experience that your clients will love and want to buy. You can share a detailed vision and requirements or let me fulfill your ideas from scratch.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    User-friendly interfaces
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Innovative UI/UX design</p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Engaging user experience
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Highly intuitive interfaces
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Attractive front-end
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil-edit services__icon'></i>
            <h3 className='services__title'>Consulting</h3>
          </div>

          <span onClick={() => toggleTab(3)} className='services__button'>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
              <h3 className='services__modal-title'>Consulting</h3>
              <p className='services__modal-description'>
                If you need to a consultation on any topic related to frontend, feel free to book a call. I can help you with the following topics:
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Frontend design
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Websites development</p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    UI/UX design
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Company branding
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                   Online lessons on Frontend, Algorithms and Data Structures.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
