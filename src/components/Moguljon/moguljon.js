import React from 'react';
import './moguljon.scss';
import omi from './img/omni-removed.png';
import mm from './img/mm.png';
import nn from './img/nn.png';
import {Helmet} from "react-helmet";
// import { Link } from 'react-router-dom';
import robofriends from './img/robofriends.png';
import trillo from './img/trillo.png';
// import ws from './img/W-S-logo.png';
import portfolio from './img/portfolio.png';
import shopify from './img/sprite/shopify-dark.svg';
import react from './img/react.png';
import sass from './img/sass.png';
import css from './img/css.png';

const Moguljon = () => {
  return(
    <section className='section-list'>
      <Helmet>
         <title>Portfolio | Web Studios</title>
         <meta name="description" content='Our work speaks for itself; we have created unique websites that you as clients will value, take a look at some of the beautiful interfaces we have created for brands and our portfolio.' />
      </Helmet>
      {/* <div className='header__logo-box'>
        <Link to='/' className='mobile-logo'>
          <img src={ws} alt='alt' className='header__logo'/>
        </Link>
      </div>  */}
      <div className='section-work__box tc'>
        <div className='u-center-text'>
          <h2 className='heading-secondary'>Our Works</h2>
        </div>
        <p className='section-work__paragraph'>based in New York</p>
      </div>
      <h2 className='work-header-two tc'><span className='products'>Websites</span></h2>
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
         <div className='work__platforms'>
          <h4 className='work__header-four'>Built With Shopify</h4>
         </div>
          <img src={shopify} alt='' className='work__platform-img' />
       </div>
     </div>
     <div className='tc other-work'>
       <div className='work__img-container other-container'>
        <img src={portfolio} alt='' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Personal portfolio with a modern look and layout.</h3>
         <p className='work__paragraph'>Development, Web Design</p>
         <div className='work__btn-container'>
          <a href='https://portfolio.jonathanaguilar.live/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
         <div className='work__platforms'>
          <h4 className='work__header-four'>Built with Custom Code With the Javascript Framework React, and Sass</h4>
         </div>
          <img src={react} alt='' className='work__platform-img' />
          <img src={sass} alt='' className='work__platform-img' />
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
         <a href='https://newsmedia.jonathanaguilar.live/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
         <div className='work__platforms'>
          <h4 className='work__header-four'>Built with Modern HTML5 and CSS3</h4>
         </div>
          <img src={css} alt='' className='work__platform-img' />
       </div>
     </div>

     <h2 className='work-header-two tc'><span className='products'>Design</span></h2>

     <div className='tc other-work'>
       <div className='work__img-container--2'>
        <img src={robofriends} alt='' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>A website built with a modern framework called React. It has a search bar that allows you to filter based on a name you search for.</h3>
         <p className='work__paragraph'>React Development, Web Design</p>
         <div className='work__btn-container'>
          <a href='https://moguljon.github.io/robofriends/' target='__blank' className='work__btn--2 btn'>View Project</a>
         </div>
         <div className='work__platforms'>
          <h4 className='work__header-four'>Built with Custom Code With the Javascript Framework React</h4>
        </div>
          <img src={react} alt='' className='work__platform-img' />
      </div>
     </div>

     <div className='work tc'>
       <div className='work__img-container--2'>
        <img src={omi} alt='' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Beautiful React Application With Modern Design and Layout</h3>
         <p className='work__paragraph'>Development, Web Design</p>
         <div className='work__btn-container'>
         <a href='https://omnifood.jonathanaguilar.live/' target='__blank' className='work__btn--2 btn'>View Project</a>
         </div>
         <div className='work__platforms'>
            <h4 className='work__header-four'>Built with Custom Code With the Javascript Framework React, and Sass</h4>
          </div>
            <img src={react} alt='' className='work__platform-img' />
            <img src={sass} alt='' className='work__platform-img' />
       </div>
     </div>
     <div className='tc other-work'>
       <div className='work__img-container--2'>
        <img src={trillo} alt='' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>A demo hotel homepage.</h3>
         <p className='work__paragraph'>React Development, Web Design</p>
         <div className='work__btn-container'>
          <a href='https://trillo.jonathanaguilar.live/' target='__blank' className='work__btn--2 btn'>View Project</a>
         </div>
         <div className='work__platforms'>
          <h4 className='work__header-four'>Built with Custom Code With Sass</h4>
         </div>
          <img src={sass} alt='' className='work__platform-img' />
      </div>
     </div>


    </section>
  )
}

export default Moguljon;