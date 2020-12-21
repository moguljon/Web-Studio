import React from 'react';
import './About.scss';
// import { Link } from 'react-router-dom';
// import illustration from './img/canva.png';
// import canva1 from './img/canva1.jpg';
// import canva3 from './img/canva3.png';
// import { CgAlbum } from "react-icons/cg";


const About = () => {
  return(
      <section className='section-about'>
         <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>What We Do</h2>
        </div>
        <div className='row2'>
          <div className='col-1-of-3'>
            <div className='section-about__container'>
              <ion-icon name="albums-outline" className='icon1' size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>UI/UX</h2>
              <p className='section-about__paragraph'>Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='section-about__container'>
              <ion-icon name="bulb-outline" className='section-about__color' size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>Branding</h2>
              <p className='section-about__paragraph'>Character Design, Icon Set, Illustration Guide, Illustration Set</p>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='section-about__container'>
              <ion-icon name="bag-check-outline" size='large'  ></ion-icon>
              <h2 className='section-about__header--two'>Development</h2>
              <p className='section-about__paragraph'>HTML/CSS, JavaScript Animation, Shopify, Responsive Website</p>
            </div>
          </div>
        </div>






        
        {/* 
        
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>What We Do</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
           <h3 className='heading-teritary u-margin-bottom-small'>
             We create Simple, fast, and scalable apps.
           </h3>
           <p className='paragraph'>We help grow organizations by building web base application and give them the online presence they have been looking for.</p>
           <h3 className='heading-teritary u-margin-bottom-small'>
             Oh yes! We also design too.
           </h3>
           <p className='paragraph'>That means we have a wide range of skills that allows us to tackle several areas that makes life easier.</p>
           
              <Link to='/booking' className='btn-text'>Contact Us &rarr;</Link>
          </div>
          <div className='col-1-of-2'>
           <div className='composition'>
            <img src={illustration} alt='image1' className='composition__photo composition__photo--p1' />
            <img src={canva1} alt='image2' className='composition__photo composition__photo--p2' />
            <img src={canva3} alt='image3' className='composition__photo composition__photo--p3' />
           </div>
          </div>
        </div> */}
      </section>
  )
}

export default About;