import React from 'react';

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i className='bx bx-award about__icon'></i>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>3+ years</span>
      </div>

      <div className='about__box'>
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className='about__title'>Completed</h3>
        <span className='about__subtitle'>100+ Projects</span>
      </div>

      <div className='about__box'>
        <i className='bx bx-support about__icon'></i>

        <h3 className='about__title'>Fluent English</h3>
        <span className='about__subtitle'>C1/Proficient Level</span>
      </div>
    </div>
  );
};

export default Info;
