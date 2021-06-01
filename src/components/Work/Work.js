import React from 'react';
import './Work.scss';
import mm from './img/mm.png';
import { Link } from 'react-router-dom';
import katie from '../../img/katie-project.png';
import miksi from '../../img/miksii.png';

const Work = () => {
  return(
    <section className='section-work'>
      <div className='section-work__box tc'>
        <div className='u-center-text'>
          <h2 className='heading-secondary'>Our Works</h2>
        </div>
        <p className='section-work__paragraph'>based in New York</p>
      </div>
     <div className='work tc'>
       <div className='work__img-container'>
        <img src={mm} alt='' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>MogulJon, A Website for Women Clothing</h3>
         <p className='work__paragraph'>Product, Web Design</p>
         <div className='work__btn-container'>
          <a href='https://moguljon.com/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     </div>
     <div className='tc other-work'>
       <div className='work__img-container other-container'>
        <img src={katie} alt='Kaite Work' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Katie Ray Website, A Redesign Website to Improve the Design</h3>
         <p className='work__paragraph'>Product, Web Design</p>
         <div className='work__btn-container'>
          <a href='https://www.katieraybathandglow.com/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     </div>
     <div className='work tc'>
       <div className='work__img-container'>
        <img src={miksi} alt='' className='work__img' width='500px' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Miksi, A Beauty Website</h3>
         <p className='work__paragraph'>Development, Web Design</p>
         <div className='work__btn-container'>
          <a href='https://miksii.com/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     </div>
     <div className='tc'>
     <Link to='/portfolio'className='btn' style={{fontSize: '2rem', fontWeight: 'bold'}}>View More Projects →</Link>
     </div>
     
    </section>
  )
}

export default Work;