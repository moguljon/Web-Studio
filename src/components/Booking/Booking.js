import React, { Component } from 'react';
import './Booking.scss';
import {Helmet} from "react-helmet";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
// import ws from './img/W-S-logo.png';
import Video from '../Video/Video';
import Logo2 from '../Logo2/Logo2';

class Booking extends Component {
  render() {
    return(
    <section className='section-book'>
      <Logo2 />
      <Helmet>
         <title>Booking | Web Studios</title>
         <meta name="description" content='Contact Web Studios with potential new projects and questions you may have. Thank you for visiting us.' />
      </Helmet>
      <Video />
        
      <div className='tc mobile-header'>
        <h2 className='heading-secondary u-margin-top-small u-margin-bottom-medium booking' style={{color: '#fff'}}>Contact Us!</h2>
      </div>
      <div className='contact-section'>
        <div className='side-section removing'>
          <div className='tc tr '>
            <h2 className='heading-secondary u-margin-top-small u-margin-bottom-medium booking'>Contact Us!</h2>
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
            </div>
            <div className='side-section__container1'>
              <div className='side-section__container2'>
                  <AiOutlineMail className='side-section__icon' />
              </div>
              <div className='sizing'>
                <h3 className='side-section__header-three'>For Questions</h3>
                <p className='side-section__email'>
                  <a href='mailto:jonathanaguilarweb@gmail.com'>Email</a>
                </p>
              </div>
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
          <button type='submit' className='btn btn--main'>Send Away &rarr;</button>
        </form>
      </div>
    </section>
  )
  }
}

export default Booking;