import React from 'react';
import './Prices.scss';
import { Link } from 'react-router-dom';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {Helmet} from "react-helmet"; 
import logo from './img/logo_transparent.png';


const Prices = () => {
  return(
    <section className='section-tours'>
      <div className='header__logo-box'>
        <Link to='/' className='mobile-logo'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div> 
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Packages</h2>
      </div>
      <Helmet>
         <title>Prices - Web Studios</title>
         <meta name="description" content='price packages where each plan gives you diffrent things bases on your needs and wants.' />
      </Helmet>

      {/* <div className='row'>
        <div className='col-1-of-3'>
          <div className='card'>
            <div className='card__side card__side--front card__side-front-1'>
              <div className='card__picture card__picture--1'>
                &nbsp;
              </div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--1'>Investment</span>
              </h4>
              <div className='card__details'>
                <ul>
                  <li>Responsive website</li>
                  <li>Single page modern design</li>
                  <li>Custom logo</li>
                  <li>2 Rounds of Revisions</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-1'>
              <div className='card__cta'>
                <div className='card__price-box'>
                  <p className='card__price-only'>Only</p>
                  <p className='card__price-value'>$297</p>
                </div>
                <Link to='/booking' className='btn btn--white'>Contact Us</Link>
               
              </div>
            </div>
          </div>
        </div>

        <div className='col-1-of-3'>
          <div className='card'>
            <div className='card__side card__side--front card__side-front-2'>
              <div className='card__picture card__picture--2'>
                &nbsp;
              </div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--2'>Premium Plan</span>
              </h4>
              <div className='card__details'>
                <ul>
                  <li>3 Page responsive website</li>
                  <li>Custom logo</li>
                  <li>Brand colors, fonts, and message for brand</li>
                  <li>3 round revisions</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-2'>
              <div className='card__cta'>
                <div className='card__price-box'>
                  <p className='card__price-only'>Only</p>
                  <p className='card__price-value'>$497</p>
                </div>
                <Link to='/booking' className='btn btn--white'>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='col-1-of-3'>
          <div className='card'>
            <div className='card__side card__side--front card__side-front-3'>
              <div className='card__picture card__picture--3'>
                &nbsp;
              </div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--3'>Immersive Plan</span>
              </h4>
              <div className='card__details'>
                <ul>
                  <li>Custom Shopify website or website from scratch</li>
                  <li>Shop availability</li>
                  <li>Marketing campaigns</li>
                  <li>Social media integration</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-3'>
              <div className='card__cta'>
                <div className='card__price-box'>
                  <p className='card__price-only'>Only</p>
                  <p className='card__price-value'>$997</p>
                </div>
                <Link to='/booking' className='btn btn--white'>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className='u-center-text  u-margin-top-huge'>
        <Link to='/priceDetails'>
          <a href='/priceDetails' className='btn btn--main'>Explore Options</a>
        </Link>
      </div> */}

      <div className='row'>
        <div className='col-1-of-3 single-price'>
          <h1  className='price-header-1'>Investment</h1>
          <div className='price'>
            <h2 className='price'>Only $297</h2>
          </div>
          <div className='deals'>
            <p><IoIosCheckmarkCircleOutline /> Custom website using the latest designs and trends</p>
            <p><IoIosCheckmarkCircleOutline /> Single page layout</p>
            <p><IoIosCheckmarkCircleOutline /> Responsive design</p>
            <p><IoIosCheckmarkCircleOutline /> 1 round of revisions</p>
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
            <p><IoIosCheckmarkCircleOutline /> 3 Page Responvie Website</p>
            <p><IoIosCheckmarkCircleOutline /> Custom Logo</p>
            <p><IoIosCheckmarkCircleOutline /> Brand colors, fonts, and message for brand</p>
            <p><IoIosCheckmarkCircleOutline /> Your choice of platfrom or custom</p>
          </div>
          <Link to='/booking' className='btn btn--main' style={{marginTop: '2rem'}}>Schedule</Link>
        </div>
        <div className='col-1-of-3 single-price'>
          <h1  className='price-header-1'>Immersive</h1>
          <div className='price'>
            <h2 className='price'>Only $997</h2>
          </div>
          <div className='deals'>
            <p><IoIosCheckmarkCircleOutline /> Custom Shopify website or website from scratch</p>
            <p><IoIosCheckmarkCircleOutline /> Shop availability</p>
            <p><IoIosCheckmarkCircleOutline /> Marketing campaigns</p>
            <p><IoIosCheckmarkCircleOutline /> Social media integration</p>
          </div>
          <Link to='/booking' className='btn btn-outline'>Schedule</Link>
        </div>
      </div>
    </section>
  )
}

export default Prices;