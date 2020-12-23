import React, { Component } from 'react';
import './Booking.scss';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import logo from './img/logo_transparent.png';
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
      <div className='header__logo-box'>
        <Link to='/'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div>
   
      {/* <div className='row'>
        <div className='book'>
          <div className='book__form'>
            <form name='contact' netlify='true' netlify-honeypot="bot-field" action='/booking' method='post' className='form'>
              
              <input type='hidden' name='form-name' value='booking' />
              <div className='u-margin-bottom-medium'>  
                <h2 className='heading-secondary header-booking'>Contact Us</h2>
                <p className='book-paragraph'>Thank you for choosing Web Studios, please for all inquaries simply write your name and email so that we can contact you on there and assist you for your needs. Please allow a few hours to get in touch, furtheremore, if you need assistance right away please contact use via Instagram, right below.</p>
              </div>

              <div className='form__group'>
                <input type='text' className='form__input' id='name' name='name' required />
                <label className='form__label' htmlFor='name'>Full Name</label>
              </div>

              <div className='form__group'>
                <input type='email' className='form__input' id='email' name='email' required />
                <label className='form__label' htmlFor='email'>Email</label>

              <div className='form__group u-margin-top-small'>
              <button type='submit' className='btn btn--main'>Send Away &rarr;</button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* <h1 className='booking-header'>Contacts US</h1>
      <p className='booking-paragraph'>Contact us for any questions or inquiries regarding projects. We love to work with you. Please allow us some time to get back to you.</p> */}
      <div className='contact-section'>
        <div className='side-section'>
        <div className='tc'>
          <h2 className='heading-secondary2 u-margin-top-small '>Contact Us</h2>
          <p className='side-section__paragraph'>Contact us for any questions or inquaries regarding projects.</p>
          <div className='side-section__container1'>
            <div className='side-section__container2'>
                <FaLinkedin className='side-section__icon' />
            </div>
            <div className='sizing'>
              <h3 className='side-section__header-three'>LinkedIn</h3>
              <p className='side-section__email'>
                <a href='https://www.linkedin.com/in/jonathan-aguilar-047130ba'>Jonathan Aguilar</a>
              </p>
            </div>
            <hr />
          </div>
          <div className='side-section__container1'>
            <div className='side-section__container2'>
                <FaGithub className='side-section__icon' />
            </div>
            <div className='sizing'>
              <h3 className='side-section__header-three'>Github</h3>
              <p className='side-section__email'>
                <a href='https://github.com/moguljon'>Github/jonathan</a>
              </p>
            </div>
            <hr />
          </div>
        </div>
        </div>
        <form name='contact' netlify='true' netlify-honeypot="bot-field" action='/booking' method='post' className='contact-form'>
          <input type='hidden' name='form-name' value='booking' />
          <label className='label' htmlFor='fullname'>Name</label>
          <input type='text' className='contact-form-text' name='fullname' id='fullname' required />
          <label className='label' htmlFor='email'>Email</label>
          <input type='email' className='contact-form-text' name='email' id='email' required />
          <label htmlFor='message' className='label'>Message</label>
          <textarea className='contact-form-text' id='message' name='message' required></textarea>
          <button type='submit' className='btn btn--grey'>Send Away &rarr;</button>
        </form>
      </div>
    </section>
  )
  }
}

export default Booking;