import React from 'react';
import { Link } from 'react-router-dom';
import './Bottom.scss';
import '../Social/Social'
import Social from '../Social/Social';
import ws from '../../img/logo2/vector/default-monochrome.svg';

const Bottom = () => {
    return(
        <section className='bottom'>
            <div className='bottom__img-container'>
            <img src={ws} className='bottom__img' alt='logo'/>
            </div>
            <div className='bottom__container'>
                <div className='bottom__items'>
                    <Link to='/resources' className='bottom__item'>Resources |</Link>
                </div>
                <div className='bottom__items'>
                    <a href='https://webstudiossignup.herokuapp.com/' className='bottom__item'>Newsletter |</a>
                </div>
                <div className='bottom__items'>
                    <Link to='/booking' className='bottom__item'>Booking |</Link>
                </div>
                <div className='bottom__items'>
                    <a href='https://resume.io/r/Ahq2YpC4a' className='bottom__item'>Resume</a>
                </div>
            </div>
            <Social />
        </section>
    )
}

export default Bottom;