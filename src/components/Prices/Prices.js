import React from 'react';
import './Prices.scss';
import { Link } from 'react-router-dom';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {Helmet} from "react-helmet"; 

const Prices = () => {
  return(
    <section className='section-tours'>
      <Link to='/'>
        <div className='header__logo-box'>
          <div className='new-logo'>
            <p className='new-logo__brand'>W<span className='brand2'></span>&mdash;S</p>
          </div>
        </div>
      </Link>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Packages</h2>
      </div>
      <Helmet>
         <title>Prices - Web Studios</title>
         <meta name="description" content='price packages where each plan gives you diffrent things bases on your needs and wants.' />
      </Helmet>

      <div className='row'>
        <div className='col-1-of-3 single-price'>
          <h1  className='price-header-1'>Investment</h1>
          <div className='price'>
            <h2 className='price'>Only $297</h2>
          </div>
          <div className='deals'>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> Custom website using the latest designs and trends</p>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> Single page layout</p>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> Responsive design</p>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> 1 round of revisions</p>
          </div>
          <Link to='/booking' className='btn btn-outline'>Schedule</Link>
        </div>
   
        <div className='col-1-of-3 single-price main'>
          <p className='most-popular'>Most Popular</p>
          <h1  className='price-header-1'>Premium</h1>
          <div className='price'>
            <h2 className='price'>Only $495</h2>
          </div>
          <div className='deals'>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> 3 Page Responvie Website</p>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> Custom Logo</p>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> Brand colors, fonts, and message for brand</p>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> Your choice of platfrom or custom</p>
          </div>
          <Link to='/booking' className='btn btn--main' style={{marginTop: '2rem'}}>Schedule</Link>
        </div>
        <div className='col-1-of-3 single-price'>
          <h1  className='price-header-1'>Immersive</h1>
          <div className='price'>
            <h2 className='price'>Only $997</h2>
          </div>
          <div className='deals'>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> Custom Shopify website or website from scratch</p>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> Shop availability</p>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> Marketing campaigns</p>
            <p><IoIosCheckmarkCircleOutline size={15} className='icons' /> Social media integration</p>
          </div>
          <Link to='/booking' className='btn btn-outline'>Schedule</Link>
        </div>
      </div>
    </section>
  )
}

export default Prices;