import React from 'react';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return(
    <footer className='footer'>
      <div className='footer__logo-box'>
        <p className='footer__paragraph'><strong>COPYRIGHT © {currentYear}, WEB STUDIOS.</strong></p>
        <p>Coded by Jonathan Aguilar</p>
        {/* <p className='footer__paragraph--two'><a href='/privacy' className='achor'>Privacy</a> |  <a href='/privacy' className='achor'>Terms</a> | <a href='/privacy' className='achor'>Conditions</a></p> */}
      </div>
    </footer>
  )
}

export default Footer;