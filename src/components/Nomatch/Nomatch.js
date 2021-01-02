import React from 'react';
import './Nomatch.scss';
import nomatch from './img/notfound.png';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Nomatch = () => {
    return(
        <section className='nomatch tc'>
            <Helmet>
                <title>Page Not Found  | Web Studios</title>
                <meta name="description" content='This page does not exist. Sorry.' />
            </Helmet>
            <h1 className='nomatch__header'>404 Page Not Found!</h1>
            <Link to='/' className='btn btn--white tc' style={{marginBottom: '4rem'}}> Take me Home</Link>
            <p className='nomatch__paragraph'>It seems like the page you are looking for does not exist.</p>
            <img src={nomatch} className='nomatch__img' alt='' />
        </section>
    )
}

export default Nomatch;