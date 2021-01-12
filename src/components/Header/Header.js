import React from 'react';
import './Header.scss';
// import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
// import ws from './img/W-S-logo.png'

const Header = () => {
  return(
   <header className='header'>
      {/* <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src={Mockup} type='video/mp4'></source>
          <source src={Mockup1} type='video/webm'></source>
          Your browser is not supported
        </video>
      </div> */}

<div className='particles-mobile'>
  <Particles className='particles'
      params={{
        "particles": {
            "number": {
                "value": 40
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }} />
</div>

  
  {/* <Link to='/'>
        <div className='header__logo-box'>
          <div className='new-logo'>
            <p className='new-logo__brand'>W<span className='brand2'></span>&mdash;S</p>
          </div>
        </div>
      </Link> */}


      {/* <div className='header__logo-box'>
        <Link to='/' className='mobile-logo'>
          <img src={ws} alt='alt' className='header__logo'/>
        </Link>
      </div>  */}
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main tc'>Web Studios</span>
          <span className='heading-primary--secondary'>Creating Experiences on the Web</span>
        </h1>
        
        
        <p className='mobile'>
          The home of a creative platform use to build and scale websites, apps, and designs for you. Whether you are looking to 
          create an online presence or you need help improving it we got you covered. We carefully curate a game plan to see 
          it through so that you can grow..
        </p>
          <div>
          <a href='https://calendly.com/webstudios/15min?month=2020-12' className='btn btn--main'>Book a quck call</a>
          <a href='https://resume.io/r/Ahq2YpC4a' className='btn ghost display' style={{marginLeft: '2rem'}}>View Resume</a>

        </div>
        
        <a href='https://resume.io/r/Ahq2YpC4a' className='mobile-blog' style={{color: '#32353b'}}>View Resume</a>
        
      </div>
  
    </header>
  )
}

export default Header;