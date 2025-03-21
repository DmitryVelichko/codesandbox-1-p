import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personal journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex aaa'
                : 'qualification__button button--flex aaa'
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Algorithms and Data Structures</h3>
                <span className='qualification__subtitle'>
                  Onlince Education
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>       2022 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Web Development</h3>
                <span className='qualification__subtitle'>
                  Online Education
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>       2020 - Present
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Master's Degree in Translation</h3>
                <span className='qualification__subtitle'>
                  Moscow State Open University
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>       2005 - 2010
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>

          <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Frontend Developer</h3>
                <span className='qualification__subtitle'>
                  Fingular
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>       2024 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Frontend/Web3 Developer</h3>
                <span className='qualification__subtitle'>ThirdWeb Pro Solutions</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>       2022 - 2024
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Frontend Web Developer</h3>
                <span className='qualification__subtitle'>Main Scientific Innovation and Implementation Center</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>       2021 - 2022
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>


            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Freelance Web Developer</h3>
                <span className='qualification__subtitle'>
                Remote
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>       2020 - 2021
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Translator and Interpreter</h3>
                <span className='qualification__subtitle'> Museum of Astronautics, Moscow</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>        2014 - 2019
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
