import React, { Component } from 'react';
import './Booking.scss';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

class Booking extends Component {
  render() {
    return(
    <section className='section-book'>
    
      <Helmet>
         <title>Booking - Web Studios</title>
         <meta name="description" content='Contact Web Stuidos with potential new projects and questions you may have. Thank you for visiting us.' />
      </Helmet>
      <Link to='/'>
        <div className='header__logo-box'>
          <div className='new-logo'>
            <p className='new-logo__brand'>W<span className='brand2'></span>&mdash;S</p>
          </div>
        </div>
      </Link>
      <div className='contact-section'>
        <div className='side-section'>
        <div className='tc tr'>
          <h2 className='heading-secondary2 u-margin-top-small '>Contact Us!</h2>
          <p className='side-section__paragraph'>Contact us to discuss pricing and your project. We love to hear about it!</p>
          <p className='side-section__paragraph'>Please just give us a brief description and we will get back to you.</p>
          <div className='side-section__container1'>
            <div className='side-section__container2'>
                <FaLinkedin className='side-section__icon' />
            </div>
            <div className='sizing'>
              <h3 className='side-section__header-three'>For Businesses</h3>
              <p className='side-section__email'>
                <a href='https://www.linkedin.com/in/jonathan-aguilar-047130ba'>LinkedIn</a>
              </p>
            </div>
            <hr />
          </div>
          <div className='side-section__container1'>
            <div className='side-section__container2'>
                <FaGithub className='side-section__icon' />
            </div>
            <div className='sizing'>
              <h3 className='side-section__header-three'>For Developers</h3>
              <p className='side-section__email'>
                <a href='https://github.com/moguljon'>Github</a>
              </p>
            </div>
            <hr />
          </div>
        </div>
        </div>
        <form name='contact' netlify='true' netlify-honeypot="bot-field" action='/booking' method='post' className='contact-form'>
          <input type='hidden' name='form-name' value='booking' />
          <label className='label' htmlFor='fullname'>Name <span className='asterisk'>*</span></label>
          <input type='text' className='contact-form-text' name='fullname' id='fullname' required />
          <label className='label' htmlFor='email'>Email  <span className='asterisk'>*</span></label>
          <input type='email' className='contact-form-text' name='email' id='email' required />
          <label htmlFor='message' className='label'>Message  <span className='asterisk'>*</span></label>
          <textarea className='contact-form-text' id='message' name='message' required></textarea>
          <button type='submit' className='btn btn--grey'>Send Away &rarr;</button>
        </form>
      </div>
    </section>
  )
  }
}

export default Booking;