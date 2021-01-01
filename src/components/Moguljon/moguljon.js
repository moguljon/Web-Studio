import React from 'react';
import './moguljon.scss';
import omi from './img/omni-removed.png';
import mm from './img/mm.png';
import nn from './img/nn.png';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import robofriends from './img/robofriends.png';
import trillo from './img/trillo.png';
import portfolio3 from './img/portfolio3.png';
import ws from './img/W-S-logo.png';

const Moguljon = () => {
  return(
    <section className='section-list'>
      <Helmet>
         <title>Portfolio | Web Studios</title>
         <meta name="description" content='Our work speaks for itself, we have created amazing websites that clients will love and you are able to see what work we do before you give us a try.' />
      </Helmet>
      <div className='header__logo-box'>
        <Link to='/' className='mobile-logo'>
          <img src={ws} alt='alt' className='header__logo'/>
        </Link>
      </div> 
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
      </div>
     </div>

     <div className='work tc'>
       <div className='work__img-container--2'>
        <img src={portfolio3} alt='' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>A fantastic single page portfolio website example.</h3>
         <p className='work__paragraph'>Development, Web Design</p>
         <div className='work__btn-container'>
         <a href='https://jonathanaguilarportfolio.netlify.app/' target='__blank' className='work__btn--2 btn'>View Project</a>
         </div>
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
          <a href='https://trilloinn.netlify.app/' target='__blank' className='work__btn--2 btn'>View Project</a>
         </div>
      </div>
     </div>


    </section>
  )
}

export default Moguljon;