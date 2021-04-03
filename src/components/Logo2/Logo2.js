import React from 'react';
import ws from '../../img/noun-s.svg';
import { Link } from 'react-router-dom';
import './Logo2.scss';

const Logo2 = () => {
    return(
        <div>
            <div className='logo2 header__logo-box'>
                <Link to='/' >
                    <img src={ws} alt='alt' className='header__logo' />
                </Link>
            </div>
        </div>  
    )
}

export default Logo2;