import React from 'react';
import './About.scss';

const About = () => {
  return(
      <section className='section-about'>
         <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>What We Do</h2>
        </div>
        <div className='row2'>
          <div className='col-1-of-4'>
            <div className='section-about__container'>
              <ion-icon name="albums-outline" className='icon1' size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>Design</h2>
              <p className='section-about__paragraph'>We create digital assets that fullfils your business needs. </p>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='section-about__container'>
              <ion-icon name="bulb-outline" className='section-about__color' size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>Development</h2>
              <p className='section-about__paragraph'>We design custom code using the latest tools and frameworks to make your project come to life.</p>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='section-about__container'>
              <ion-icon name="pricetags-outline" className='section-about__color' size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>Platforms</h2>
              <p className='section-about__paragraph'>We are able to use a variety of platforms like Squarespace and Shopify .</p>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='section-about__container'>
              <ion-icon name="globe-outline" className='section-about__color' size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>Scalibility</h2>
              <p className='section-about__paragraph'>We create projects that scale as your business grows.</p>
            </div>
          </div>
        </div>

        
      </section>
  )
}

export default About;