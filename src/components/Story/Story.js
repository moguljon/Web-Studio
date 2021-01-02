import React from 'react';
import './Story.scss';
// import Mockup from './img/video2.mp4';
// import Mockup1 from './img/video.webm';
import resized from './img/resized3.jpeg';

const Story = () => {
  return(
    <section className='section-stories'>
      {/* <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src={Mockup} type='video/mp4'></source>
          <source src={Mockup1} type='video/webm'></source>
          Your browser is not supported
        </video>
      </div> */}
      
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>From the founder</h2>
      </div>
      
        <div className='story' >
          <div className='section-stories__container--one tc'>
            <img src={resized} alt='' className='section-stories__image' />
          </div>
          <div className='section-stories__container--two'>   
            <h3 className='heading-teritary u-margin-bottom-small tc section-stories__header--three'><span role='img' aria-label='eng'>👋 </span>Hi I'm Jonathan Aguilar</h3>
            <p >Hello, I am Jonathan Aguilar I make your big idea come to life so if you need a web presence or social media presence I can incorporate what I have learned through my experience in the technology space and use my knowledge to build your next big idea. I am a self taught web developer from the ground up and I know first hand how hard it is when you have no guidance but you do not have to feel that way as I will work with you every step of the way to build your idea. </p>
            <p>Cheers,</p>
            <p>Jonathan Aguilar</p>
          </div>
        </div>
      
    </section>
  )
}

export default Story;