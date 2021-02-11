import React from 'react';
import './Endorse.scss';
import image1 from './img/shopify2.svg';
import image2 from './img/squarespace.svg';
import image3 from './img/wix.svg';

const Endorse = () => { 
  return(
    <section className='section-endorse tc'>
      <p className='section-endorse__paragraph'>We can build unique websites by leveraging E-Commerce platforms.</p>
      <div>
       
        
        
          <img src={image1} alt='' className='section-endorse__image' />
        

          <img  src={image2} alt='' className='section-endorse__image' />
     
        
          <img  src={image3} alt='' className='section-endorse__image' />
    
       
      </div>
    </section>
  )
}

export default Endorse;