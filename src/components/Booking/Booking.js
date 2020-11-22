import React, { Component } from 'react';
import './Booking.scss';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import {Helmet} from "react-helmet";
// import Navigation from '../Navigation/Navigation';
// import Particles from 'react-particles-js';



class Booking extends Component {
  render() {
    return(
    <section className='section-book'>
     {/* <Particles className='particles'
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 4
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} /> */}
      <Helmet>
         <title>Booking - Web Studios</title>
         <meta name="description" content='Contact Web Stuidos with potential new projects and questions you may have. Thank you for visiting us.' />
      </Helmet>
   
      <div className='header__logo-box'>
        <Link to='/'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div>

      <div className='row'>
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
      </div>

    </section>
  )
  }
  
}

export default Booking;