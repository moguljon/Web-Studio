import React from 'react';
import './Footer.scss';
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";


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
        <div className='icons-box'>
          <div className='icon-box-container'>
            <a href='https://www.instagram.com/webstudios.io/' className='icons'>
              <IoLogoInstagram className='icons-other' />
            </a>
          </div>
          <div>
            <a href='https://github.com/moguljon' target='_blank ' className='icons' rel="noopener noreferrer"  >
              <FaGithub className='icons-other'  />
            </a>
          </div>
          <div>
            <a href='http://www.linkedin.com/in/jonathan-aguilar-047130ba' target='_blank' className='icons' rel="noopener noreferrer"  >
              <FaLinkedin className='icons-other' />
            </a>
          </div>
      </div>
      </div>
     

    </footer>
  )
}

export default Footer;