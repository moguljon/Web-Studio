import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
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
          <span className='heading-primary--secondary'>Creating Brands That Matter</span>
        </h1>
        
        
        <p className='mobile'>
        This creative platform leverages technology to create brands from inception to production. We understand that it is much easier to have a guiding hand that understands technology and uses it to develop solutions. Whether you are looking to start or start over, we've got you covered. 
        </p>
          <div>
          <a href='https://calendly.com/webstudios/15min?month=2020-12' className='btn btn--main'>Book a quck call</a>
          <Link to='/services' className='btn ghost display' style={{marginLeft: '2rem'}}>View Services</Link>

        </div>
        
        <Link to='/services' className='mobile-blog'>View Services</Link>
        
      </div>
  
    </header>
  )
}

export default Header;