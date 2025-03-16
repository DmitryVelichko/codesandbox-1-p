import React from 'react';
import './testimonials.css';
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper';

const Testimonials = () => {
  return (
    <section className='testimonial container section' id='testimonials'>
      <h2 className='section__title'>Testimonials</h2>
      <span className='section__subtitle'>Some nice words from clients</span>

      <Swiper
        className='testimonial__container'
        spaceBetween={24}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2, spaceBetween: 48 },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className='testimonial__card' key={id}>
              <img src={image} alt='Human face' className='testimonial__img' />

              <h3 className='testimonial__name'>{title}</h3>
              <p className='testimonial__description'>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
