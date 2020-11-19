import React from 'react';
import './PriceDetails.scss';

const PriceDetails = () => {
  return(
    <section className='section-priceDetails'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Price Details</h2>
        <p className='section-priceDetails__paragrap'>Find the right package that best fits your business needs and best with your budget</p>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <p>WEBSITE DESIGN</p>
          <p>WEBSITE DESIGN</p>
          <p>WEBSITE DESIGN</p>
          <p>WEBSITE DESIGN</p>
        </div>
        <div className='col-1-of-2'>
          <p>WEBSITE DESIGN</p>
          
        </div>
      </div>
    </section>
  )
}

export default PriceDetails;