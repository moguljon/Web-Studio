import React from 'react';
import './Social.scss';
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";

const Social = () => {
  return(
    <section className='section-social'>
      <div className='icons-box'>
        <a href='https://www.instagram.com/webstudios.io/' className='icons'>
        <IoLogoInstagram className='icons-other' target='_blank' /> 
        </a>
        <a href='https://github.com/moguljon' target='_blank ' className='icons' rel="noopener noreferrer"  >
        <FaGithub className='icons-other'  />
        </a>
        <a href='http://www.linkedin.com/in/jonathan-aguilar-047130ba' target='_blank' className='icons' rel="noopener noreferrer"  >
        <FaLinkedin className='icons-other' />
        </a>
      </div>
    </section>
  )
}

export default Social;