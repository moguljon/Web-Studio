import React from 'react';
import './Prices.scss';
import { Link } from 'react-router-dom';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {Helmet} from "react-helmet"; 
import Logo2 from '../Logo2/Logo2';
import img1 from '../../img/adventure.svg';
import img2 from '../../img/premium.svg';
import img3 from '../../img/outerspace.svg';

const Prices = () => {
  return(
    <section className='section-tours'>
      <Logo2 />
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Simple Pricing Options</h2>
        <p className='paragraph-heading'>Choose the plan that is right for your business. All plans include a free consultation to explore options.</p>
      </div>
      <Helmet>
         <title>Find the Right Service for You | Web Studios</title>
         <meta name="description" content='Various service packages that Web Studios provides at a reasonable price.' />
      </Helmet>

      <div className='row'>
        <div className='col-1-of-3'>
          <div className='prices'>
            <div className='prices__container container1'>
             <img src={img1} className='prices__img' alt="Explore plan"/>
              <p className='prices__paragraph1'>Explore Plan</p>
              <h3 className='prices__header-three'>$280</h3>
            </div>
            <div className='prices__other-container'>
              <div className='prices__content'>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>Custom coded website or platform</p>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>3 page layout website</p>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>Responsive design for mobile</p>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>1 round of revision website</p>
              </div>
            </div>
            <div className='prices__button'>
              <Link to="/booking" className='btn btn--main'>Get Started</Link>
            </div>
          </div>
        </div>
        <div className='col-1-of-3'>
          <div className='prices'>
            <div className='prices__container container2'>
             <img src={img2} className='prices__img1' alt="premium plan"/>
              <p className='prices__paragraph1'>Premium Plan</p>
              <h3 className='prices__header-three'>$499</h3>
            </div>
            <div className='prices__other-container'>
              <div className='prices__content'>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>Custom coded website or platform</p>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>5 Page Responsive website</p>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>Up to 5 revisions</p>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>Social media integration</p>
              </div>
            </div>
            <div className='prices__button'>
              <Link to="/booking" className='btn btn--orange'>Get Started</Link>
            </div>
          </div>
        </div>
        <div className='col-1-of-3'>
          <div className='prices'>
            <div className='prices__container container3'>
             <img src={img3} className='prices__img3' alt="Immersive plan"/>
              <p className='prices__paragraph1'>Immersive Plan</p>
              <h3 className='prices__header-three'>$699</h3>
            </div>
            <div className='prices__other-container'>
              <div className='prices__content'>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>Unlimited pages</p>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>Unlimited revisions</p>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>Social media campaigns</p>
                <p className='prices__paragraph'><IoIosCheckmarkCircleOutline className='icon' size={15}/>Brand message, colors, and fonts</p>
              </div>
            </div>
            <div className='prices__button'>
              <Link to="/booking" className='btn btn--green'>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices;