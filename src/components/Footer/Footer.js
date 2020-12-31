import React from 'react';
import './Footer.scss';
import Social from '../Social/Social';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return(
    <footer className='footer'>
      <div className='footer__logo-box'>
        <p className='footer__paragraph'><strong>COPYRIGHT © {currentYear}, WEB STUDIOS.</strong></p>
{/* 
        <div className='footer__terms'>
          <div className='footer__privacy'>
            <Link to='/privacy' className='footer__link'>Privacy</Link>
          </div>|
          <div className='footer__privacy'>
            <Link to='blog' className='footer__link'>Privacy</Link>
          </div>|
          <div className='footer__privacy'>
            <Link to='blog' className='footer__link'>Privacy</Link>
          </div>
        </div> */}
        <div className='social-footer'>
        <Social />

        </div>
        
   
      </div>
     

    </footer>
  )
}

export default Footer;