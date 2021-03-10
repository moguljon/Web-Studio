import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import shopify from '../../img/shopify-dark.svg';
import react from '../../img/react.png';
import figma from '../../img/figma.png';

const About = () => {
  return(
      <section className='section-about'>
        <div className='row'>
          <div className='headline-container'>
            <h2 className='heading-secondary'>Let's Build Your Brand</h2>
            <p className='first-paragraph'>Creating unique solutions that align to your goals and brand.</p>
          </div>
      
          <div className='col-1-of-3'>
            <div className='about__services1'>
              <div className='about-mobile'>
                <h3 className='about__headerthree'>E-Commerce Solutions <ion-icon name="pricetags-outline"></ion-icon></h3>
                <p className='about__paragraph'>We create entire storefronts for your E-Commerce Business Using the latest platfroms and integrations.</p>
                <img src={shopify} alt='' className='work__platform-img about-img' />
              </div>
              <div className='about__skills'>
                <hr></hr>
                <h4 className='about__header4'>Want to know more?</h4>
                <Link to='/booking' className='about__link'>Contact Us</Link>
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='about__services1'>
              <div>
                <h3 className='about__headerthree'>Web Development <ion-icon name="code-outline"></ion-icon></h3>
                <p className='about__paragraph'>We design custom code websites using the latest tools and frameworks to make your project come to life.</p>
                <img src={react} alt='' className='work__platform-img about-img' />
              </div>
              <div className='about__skills'>
                <hr></hr>
                <h4 className='about__header4'>Want to know more?</h4>
                <Link to='/booking' className='about__link'>Contact Us</Link>
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='about__services1'>
              <div>
                <h3 className='about__headerthree'>Web Design <ion-icon name="logo-figma"></ion-icon></h3>
                <p className='about__paragraph'>We design digital assets using modern software that helps market your brand and optimize your ranking online. </p>
                <img src={figma} alt='' className='work__platform-img about-img' />
              </div>
              <div className='about__skills'>
                <hr></hr>
                <h4 className='about__header4'>Want to know more?</h4>
                <Link to='/booking' className='about__link'>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About;