import React from 'react';
import './Work.scss';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import logo from './img/logo_transparent.png';
import omi from './img/omni-removed.png';
import mm from './img/mm.png';
import nn from './img/nn.png';

const Work = () => {
  return(
    <section className='section-work'>
   `   <Helmet>
         <title>Projects - Web Studios</title>
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
    </section>
  )
}

export default Work;