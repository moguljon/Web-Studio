import React from 'react';
import './Nomatch.scss';
import nomatch from './img/notfound.png';
import { Link } from 'react-router-dom';

const Nomatch = () => {
    return(
        <section className='nomatch tc'>
            <h1 className='nomatch__header'>Why am I here?</h1>
            <Link to='/' className='btn btn--main tc' style={{marginBottom: '4rem'}}> Take me Home</Link>
            <p className='nomatch__paragraph'>It seems like the page that are looking for does not exist.</p>
            <img src={nomatch} className='nomatch__img' alt='' />
        </section>
    )
}

export default Nomatch;