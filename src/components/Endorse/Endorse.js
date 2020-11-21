import React from 'react';
import './Endorse.scss';
import image1 from './img/logo-envato.png';
import image2 from './img/logo-magento.png';
import image3 from './img/logo-woocommerce.png';
import image4 from './img/logo-wordpress.png';

const Endorse = () => { 
  return(
    <section className='section-endorse tc'>
      <p className='section-endorse__paragraph'>We are proud being able to use these technologies and custom code to build apps:</p>
      <div>
       
        
        
          <img src={image1} alt='' className='section-endorse__image' />
        
       
          <img  src={image2} alt='' className='section-endorse__image' />
     
        
          <img  src={image3} alt='' className='section-endorse__image' />
     
          <img src={image4} alt='' className='section-endorse__image' />
       
      </div>
    </section>
  )
}

export default Endorse;