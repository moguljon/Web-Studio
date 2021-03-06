import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return(
    <footer className='footer'>
      <div className='footer__logo-box'>
        <p className='footer__paragraph'><strong>COPYRIGHT © {currentYear}, WEB STUDIOS.</strong></p>
          <Link to='/privacy' className='privacy-link' style={{color: 'white'}}>Privacy</Link>
          |
          
          <Link to='/terms' className='privacy-link' style={{color: 'white'}}>Terms</Link>
          |
         
          <Link to='/cookies-policy' className='privacy-link' style={{color: 'white'}}>Cookies</Link>
          |
        <div className='social-footer'>
        </div>
      </div>
    </footer>
  )
}

export default Footer;