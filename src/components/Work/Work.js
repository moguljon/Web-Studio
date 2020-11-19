import React from 'react';
import './Work.scss';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import logo from './img/logo.png';
import test from './img/test.jpg';
import omnifood from './img/omnifood.jpg';
import football from './img/football.jpg';


const Work = () => {

  return(
    <section className='section-work'>
      <Helmet>
         <title>Work - Web Studios</title>
         <meta name="description" content='Our work speaks for itself, we have created amazing websites that clients will love and you are able to see what work we do before you give us a try.' />
      </Helmet>

      <div className='header__logo-box'>
        <Link to='/'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div>
      
      <div className='section-work__box'>
        <h1 className='section-work__header--one'>
          <span className='section-work__one'><strong>Web Studios</strong></span>
          <span className='section-work__two'>.io</span>
        </h1>
        <p className='section-work__paragraph'>based in New York</p>
      </div>

      <div align='center'>
        <div>
          <div className='container'>
            <img src={test} alt='mogul' className='image' />
            <div className='overlay overLeft'>
              <div className='text'>
                <a href='https://moguljon.com/' target='_blank'  rel='noopener noreferrer' className='btn btn--main'>View</a>
              </div>
             
            </div>
         </div>
          <div className='container'>
            <img src={omnifood} alt='omnifood' className='image' />

            <div className='overlay overLeft'>
              <div className='text'>
                <a href='https://moguljon.com/' target='_blank'  rel='noopener noreferrer' className='btn btn--main'>View</a>
              </div>
            </div>
         </div>
          <div className='container'>
            <img src={football} alt='mogul' className='image' />

            <div className='overlay overLeft'>
              <div className='text'>
                <a href='https://moguljon.com/' target='_blank'  rel='noopener noreferrer' className='btn btn--main'>View</a>
              </div>
            </div>
         </div>
        </div>
      </div>
     

    </section>
  )
}

export default Work;