import React from 'react';
import './moguljon.scss';
import other from './img/other.jpg';
import robtos from './img/robofriends.jpg';
import omi from './img/omni-removed.png';
import mm from './img/mm.png';
import nn from './img/nn.png';
import {Helmet} from "react-helmet";
import logo from './img/logo_transparent.png';
import { Link } from 'react-router-dom';

const Moguljon = () => {
  return(
    <section className='section-list'>
      <Helmet>
         <title>Portfolio - Web Studios</title>
         <meta name="description" content='Our work speaks for itself, we have created amazing websites that clients will love and you are able to see what work we do before you give us a try.' />
      </Helmet>
      <div className='header__logo-box'>
          <Link to='/'>
            <img src={logo} alt='alt' className='header__logo'/>
          </Link>
      </div>
      <div className='section-work__box tc'>
        <div className='u-center-text'>
          <h2 className='heading-secondary'>Our Latest Works</h2>
        </div>
        <p className='section-work__paragraph'>based in New York</p>
      </div>
     <div className='work tc'>
       <div className='work__img-container'>
        <img src={mm} alt='' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>MogulJon, Website for Women Clothing</h3>
         <p className='work__paragraph'>Product, Web Design</p>
         <div className='work__btn-container'>
          <a href='https://moguljon.com/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     </div>
     <div className='tc other-work'>
       <div className='work__img-container other-container'>
        <img src={omi} alt='' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Beautiful React Application With Modern Design and Layout</h3>
         <p className='work__paragraph'>Development, Web Design</p>
         <div className='work__btn-container'>
          <a href='https://omnifoodeats.netlify.app/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     </div>
     <div className='work tc'>
       <div className='work__img-container'>
        <img src={nn} alt='' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Newsgrid, A Sports Related Website Meant for News Articles</h3>
         <p className='work__paragraph'>Development, Web Design</p>
         <div className='work__btn-container'>
         <a href='https://newsmedia.netlify.app/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     </div>
    <div className='row mt'>
      <h2 className='work-header-two'><span className='products'>UX Design</span></h2>
        <div className='col-1-of-2'>
          <img src={other} alt='' className='work-images' width='100%' />
          <h3 className='work-header'>Trillo - Hotel Inspired Website </h3>
          <p className='work-paragraph'>Trillo is a demo homepage that would allow customers to book flights, rent cars, and look at reviews. With Eye catching design it is sure to catch the eye of customers.
          </p>
          <a href='https://trilloinn.netlify.app/' target='_blank'  rel='noopener noreferrer' className='btn btn--grey'>View</a>
        </div>
        <div className='col-1-of-2'>
          <img src={robtos} alt='' className='work-images' width='100%' />
          <h3 className='work-header'>Robofriends</h3>
          <p className='work-paragraph'>A website built with a modern framework called React. It has a search bar that allows you to filter based on a name you search for.
          </p>
          
          <a href='https://moguljon.github.io/robofriends/' target='_blank'  rel='noopener noreferrer' className='btn btn--grey'>View</a>
        </div>
    </div>

    {/* <div className='row top mt'>
      <h2 className='work-header-two'><span className='products'>Products Design</span></h2>
      <p className='work-paragraph'>
      Clothing design for women including swimwear, active wear, and t-shirts. Exlusively sold at www.moguljon.com.
      </p>
      <div className='col-1-of-3'>
        <img src={A} alt='' className='product-photo' />
      </div>
      <div className='col-1-of-3'>
        <img src={J} alt='' className='product-photo' />
      </div>
      <div className='col-1-of-3'>
        <img src={J} alt='' className='product-photo' />
      </div>
    </div> */}
    {/* <a href='https://moguljon.com/collections' target='_blank'  rel='noopener noreferrer' className='btn btn--grey mb5'>View All</a> */}
    </section>
  )
}

export default Moguljon;