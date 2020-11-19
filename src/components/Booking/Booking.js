import React from 'react';
import './Booking.scss';
// import { Link } from 'react-router-dom';
// import logo from './img/logo.png';
import {Helmet} from "react-helmet";
// import Navigation from '../Navigation/Navigation';

const Booking = () => {
  return(
    <section className='section-book'>
      <Helmet>
         <title>Booking - Web Studios</title>
         <meta name="description" content='Contact Web Stuidos with potential new projects and questions you may have. Thank you for visiting us.' />
      </Helmet>
      {/* <div className='header__logo-box'>
        <Link to='/'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div> */}

      <div className='row'>
        <div className='book'>
          <div className='book__form'>
            <form name='contact' netlify='true' netlify-honeypot="bot-field" action='/contact' method='post' className='form'>

              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary header-booking'>Contact Us</h2>
                <p className='book-paragraph'>We will get back to you to discuss further right away. Thnaks for visiting our website. Furthermore, if you can provide us with a brief paragraph on what you are looking for we can better assist you. Happy day.</p>
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

export default Booking;