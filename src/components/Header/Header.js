import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

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
  
  <Link to='/'>
        <div className='header__logo-box'>
          <div className='new-logo'>
            <p className='new-logo__brand'>W<span className='brand2'></span>&mdash;S</p>
          </div>
        </div>
      </Link>

{/* 
      <div className='header__logo-box'>
        <Link to='/' className='mobile-logo'>
          <img src={logo} alt='alt' className='header__logo'/>
          <p className='new-logo__brand'>W<span className='brand2 header__logo'></span>&mdash;S</p>
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
        <Link to='/prices' className='btn btn--main'>Hire Us for your projects</Link>
        <Link to='/portfolio' className='mobile-blog'>Discover Portfolio</Link>
      </div>
  
    </header>
  )
}

export default Header;