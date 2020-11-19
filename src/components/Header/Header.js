import React from 'react';
import './Header.scss';
import logo from './img/logo-white.png';


import { Link } from 'react-router-dom';


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

     

      <div className='header__logo-box'>
        <Link to='/'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>Web Studios</span>
          <span className='heading-primary--secondary'>For your web needs</span>
        </h1>
        <Link to='/Work' className='btn btn--main btn--animated'>Discover Projects</Link>
      </div>
  
    </header>
  )
}

export default Header;