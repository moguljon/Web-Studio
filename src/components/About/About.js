import React from 'react';
import './About.scss';

const About = () => {
  return(
      <section className='section-about'>
         <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>Services</h2>
        </div>
        <div className='row2'>
          <div className='col-1-of-4'>
            <div className='section-about__container'>
              <ion-icon name="albums-outline" className='icon1' size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>Web Design</h2>
              <p className='section-about__paragraph'>We create digital assets that fullfils your business needs. </p>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='section-about__container'>
              <ion-icon name="bulb-outline" className='section-about__color' size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>Web Development</h2>
              <p className='section-about__paragraph'>We design custom code using the latest tools and frameworks to make your project come to life.</p>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='section-about__container'>
              <ion-icon name="pricetags-outline" className='section-about__color' size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>Seo</h2>
              <p className='section-about__paragraph'>We optimize your website to help your score on search engines like Google.</p>
            </div>
          </div>
          <div className='col-1-of-4'>
            <div className='section-about__container'>
              <ion-icon name="globe-outline" className='section-about__color' size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>Social Media</h2>
              <p className='section-about__paragraph'>We integrate social media strategies that help your business grow.</p>
            </div>
          </div>
        </div>

        
      </section>
  )
}

export default About;