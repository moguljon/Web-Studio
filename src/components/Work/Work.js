import React from 'react';
import './Work.scss';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import logo from './img/logo.png';
import omni from './img/omnifood.jpg';
import mogul from './img/mogul.jpg';
import newsgrid from './img/newsgrid.jpg';
import other from './img/other.jpg';
import robtos from './img/robofriends.jpg';
import blue from './img/blue.jpg';
import J from './img/J.JPG';
import design from './img/design2.jpg';


const Work = () => {
  return(
    <section className='section-work'>
      <Helmet>
         <title>Projects - Web Studios</title>
         <meta name="description" content='Our work speaks for itself, we have created amazing websites that clients will love and you are able to see what work we do before you give us a try.' />
      </Helmet>

      <div className='header__logo-box'>
        <Link to='/'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div>
      
      <div className='section-work__box'>
        <h1 className='section-work__header--one'>
          <span className='section-work__one'><strong>Web Studios <span className='section-work__two'>.io</span></strong></span>
        </h1>
        <p className='section-work__paragraph'>based in New York</p>
      </div>

      <div className='row'>
        <h2 className='work-header-two'><span className='products'>Websites</span></h2>
          <div className='col-1-of-3'>
            <img src={omni} alt='mogul' className='work-images' width='100%' />
            <h3 className='work-header'>Omnifood Restaurant <span className='omnifood'>Built with React</span></h3>
            <p className='work-paragraph'>Goobye fast food, hello healthy eating. Welcome to Omnifood for all your healthy eats.</p>
            <a href='https://omnifoodeats.netlify.app/' target='_blank'  rel='noopener noreferrer' className='btn btn--grey'>View</a>
          </div>
          <div className='col-1-of-3'>
            <img src={mogul} alt='mogul' className='work-images' width='100%' />
            <h3 className='work-header'>Moguljon <span className='moguljon'>Built with Shopify</span></h3>
            <p className='work-paragraph'>The permier E-commerce website for woman's clothing.</p>
            <a href='https://moguljon.com/' target='_blank'  rel='noopener noreferrer' className='btn btn--grey'>View</a>
          </div>
          <div className='col-1-of-3'>
            <img src={newsgrid} alt='mogul' className='work-images' width='100%' />
            <h3 className='work-header'>Newsgrid <span className='newsgrid'>Built with CSS</span></h3>
            <p className='work-paragraph'>A news media inspired website. A platform that would showcase the latest sports news of the day.</p>
            <a href='https://newsmedia.netlify.app/' target='_blank'  rel='noopener noreferrer' className='btn btn--grey'>View</a>
          </div>
      </div>
     
    <div className='row mt'>
      <h2 className='work-header-two'><span className='products-ux'>UX Design</span></h2>
        <div className='col-1-of-2'>
          <img src={other} alt='' className='work-images' width='100%' />
          <h3 className='work-header'>Trillo - Hotel Inspired Website </h3>
          <p className='work-paragraph'>Trillo is a demo homepage that would allow customers to book flights, rent cars, and look at reviews. With Eye catching design it is sure to catch the eye of customers.
          </p>
          <a href='https://trilloinn.netlify.app/' target='_blank'  rel='noopener noreferrer' className='btn btn--grey'>View</a>
        </div>
        <div className='col-1-of-2'>
          <img src={robtos} alt='' className='work-images' width='100%' />
          <h3 className='work-header'>Omnifood </h3>
          <p className='work-paragraph'>A website built with a modern framework called React. It has a search bar that allows you to filter based on a name you search for.
          </p>
          
          <a href='https://moguljon.github.io/robofriends/' target='_blank'  rel='noopener noreferrer' className='btn btn--grey'>View</a>
        </div>
    </div>

    <div className='row top mt'>
      <h2 className='work-header-two'><span className='products'>Products Design</span></h2>
      <a href='https://moguljon.com/collections' target='_blank'  rel='noopener noreferrer' className='btn btn--grey mb5'>View All</a>
      <p className='work-paragraph'>
      This is clothing design for woman including swimwear, active wear, and t-shirts. Exlusively sole a www.moguljon.com
      </p>
      <div className='col-1-of-3'>
        <img src={design} alt='' className='product-photo' />
      </div>
      <div className='col-1-of-3'>
        <img src={J} alt='' className='product-photo' />
      </div>
      <div className='col-1-of-3'>
        <img src={blue} alt='' className='product-photo' />
        
      </div>
    </div>
    
    </section>
  )
}

export default Work;