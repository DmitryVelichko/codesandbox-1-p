import React from 'react';

const WorkItems = ({ item }) => {
 
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt='website front page' className='work__img' />
      <h3 className='work__title'>{item.title}</h3>
      <div className='linkbox'>
      <a href={item.link} className='work__button' target='_blank' rel='noreferrer'>
        Live Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
      <a href={item.link2} className='work__button' target='_blank' rel='noreferrer'>
        Code <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
      </div>
    </div>
  );
};

export default WorkItems;
