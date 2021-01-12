import React from 'react';
import './Social.scss';
import { FaMedium } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";

const Social = () => {
  return(
    <section>
           <div className='icons-box'>
          <div className='icon-box-container'>
            <a href='https://webstudios.medium.com/' className='icons'  target='_blank' rel="noopener noreferrer">
              <FaMedium className='icons-other' />
            </a>
          </div>
          <div>
            <a href='https://github.com/moguljon' target='_blank' className='icons' rel="noopener noreferrer"  >
              <FaGithub className='icons-other'  />
            </a>
          </div>
          <div>
            <a href='http://www.linkedin.com/in/jonathan-aguilar-047130ba' target='_blank' className='icons' rel="noopener noreferrer"  >
              <FaLinkedin className='icons-other' />
            </a>
          </div>
      </div>
    </section>
  )
}

export default Social;