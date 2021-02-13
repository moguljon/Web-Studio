import React from 'react';
import './Endorse.scss';
import image1 from './img/sprite/shopify-dark.svg';
import image2 from './img/sprite/squarespace.svg';
import image3 from './img/sprite/wix.svg';

const Endorse = () => { 
  return(
    <section className='section-endorse'>
      <p className='section-endorse__paragraph'>We can use modern E-commerce solutions.</p>
      <div className='section-endorse__container'>
          <img src={image1} alt='' className='section-endorse__image section-endorse__image--1' />
          <img  src={image2} alt='' className='section-endorse__image section-endorse__image--2' />
          <img  src={image3} alt='' className='section-endorse__image section-endorse__image--3' />
      </div>
    </section>
  )
}

export default Endorse;