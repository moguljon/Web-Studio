import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import illustration from './img/canva.png';
import canva1 from './img/canva1.jpg';
import canva3 from './img/canva3.png';


const About = () => {
  return(
      <section className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>Let Us Create your next website</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
           <h3 className='heading-teritary u-margin-bottom-small'>
             Simpe.Efficient.Scalable.Apps.
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
        </div>
      </section>
  )
}

export default About;