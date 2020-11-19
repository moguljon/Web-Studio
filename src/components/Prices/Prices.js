import React from 'react';
import './Prices.scss';
import { Link } from 'react-router-dom';

const Prices = () => {
  return(
    <section className='section-tours'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Packages</h2>
      </div>

      <div className='row'>
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
      </div>

      {/* <div className='u-center-text  u-margin-top-huge'>
        <Link to='/priceDetails'>
          <a href='/priceDetails' className='btn btn--main'>Explore Options</a>
        </Link>
      </div> */}
    </section>
  )
}

export default Prices;