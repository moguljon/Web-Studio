import React from 'react';
import './moguljon.scss';
import mm from './img/mm.png';
import {Helmet} from "react-helmet";
import robofriends from './img/robofriends.png';
import trillo from './img/trillo.png';
import shopify from './img/sprite/shopify-dark.svg';
import react from './img/react.png';
import sass from './img/sass.png';
import Logo2 from '../Logo2/Logo2';
import katie from '../../img/katie-project.png';
import wix from '../../img/wix.svg';
import miksii from '../../img/miksii.png'

const Moguljon = () => {
  return(
    <section className='section-list'>
      <Logo2 />
      <Helmet>
         <title>Portfolio | Web Studios</title>
         <meta name="description" content='Our work speaks for itself; we have created unique websites that you as clients will value, take a look at some of the beautiful interfaces we have created for brands and our portfolio.' />
      </Helmet>
      <div className='section-work__box tc'>
        <div className='u-center-text'>
          <h2 className='heading-secondary'>Our Works</h2>
        </div>
        <p className='section-work__paragraph'>based in New York</p>
      </div>
      <h2 className='work-header-two tc'><span className='products'>Websites</span></h2>
     <div className='work tc'>
       <div className='work__img-container'>
        <img src={mm} alt='Mogul Jon Website' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>MogulJon, Website for Women Clothing</h3>
         <p className='work__paragraph'>Product, Web Design</p>
         <div className='work__btn-container'>
          <a href='https://moguljon.com/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
         <div className='work__platforms'>
          <h4 className='work__header-four'>Built with</h4>
         </div>
          <img src={shopify} alt='Shopify logo' className='work__platform-img' />
       </div>
     </div>
     <div className='tc other-work'>
       <div className='work__img-container other-container'>
        <img src={katie} alt='Katie Ray Website' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Katie Ray, A Redesign Website to Improve the Design</h3>
         <p className='work__paragraph'>Web Design</p>
         <div className='work__btn-container'>
          <a href='https://www.katieraybathandglow.com/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
         <div className='work__platforms'>
          <h4 className='work__header-four'>Built with</h4>
         </div>
          <img src={wix} alt='Wix Logo' className='work__platform-img'/>
      </div>
     </div>
     <div className='work tc'>
       <div className='work__img-container'>
        <img src={miksii} alt='Miksi Website' className='work__img' width='500px'/>
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Newsgrid, A Sports Related Website Meant for News Articles</h3>
         <p className='work__paragraph'>Development, Web Design</p>
         <div className='work__btn-container'>
         <a href='https://miksii.com/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
         <div className='work__platforms'>
          <h4 className='work__header-four'>Built with</h4>
         </div>
            <img src={shopify} alt='Shopify logo' className='work__platform-img' />
       </div>
     </div>

     <h2 className='work-header-two tc'><span className='products'>Design</span></h2>
     <div className='work tc'>
       <div className='work__img-container--2'>
        <img src={robofriends} alt='Robofriends Website' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Beautiful React Application With Modern Design and Layout</h3>
         <p className='work__paragraph'>Development, Web Design</p>
         <div className='work__btn-container'>
         <a href='https://moguljon.github.io/robofriends/' target='__blank' className='work__btn--2 btn'>View Project</a>
         </div>
         <div className='work__platforms'>
            <h4 className='work__header-four'>Built with</h4>
          </div>
            <img src={react} alt='React logo' className='work__platform-img' />
       </div>
     </div>
     <div className='tc other-work'>
       <div className='work__img-container--2'>
        <img src={trillo} alt='Trillo Website' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>A Demo Hotel Homepage</h3>
         <p className='work__paragraph'>React Development, Web Design</p>
         <div className='work__btn-container'>
          <a href='https://trillo.jonathanaguilar.live/' target='__blank' className='work__btn--2 btn'>View Project</a>
         </div>
         <div className='work__platforms'>
          <h4 className='work__header-four'>Built with</h4>
         </div>
          <img src={sass} alt='sass website' className='work__platform-img' />
      </div>
     </div>


    </section>
  )
}

export default Moguljon;