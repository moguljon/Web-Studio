import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet"; 
import ws from './img/W-S-logo.png';
import astro from './img/astro.jpeg';
import './Resources.scss';
import canva from './img/canva.jpg';
import unsplash from './img/unsplash.jpg';
import figma from './img/figma.png';

const Resources = () => {
    return(
        <section className='section-resources'>
            <Helmet>
                <title>Best Resources for Business Owners | Web Studios</title>
                <meta name="description" content='Our great resources page so that you can get up and running with your business. Best of all, most of these resources are completely free.' />
            </Helmet>
            <div className='header__logo-box'>
                <Link to='/' className='mobile-logo'>
                    <img src={ws} alt='team webstudios' className='header__logo'/>
                </Link>
            </div> 
            <div className='row border'>
                <div className='col-1-of-2'>
                    <img src={astro} alt='blog' className='team' /> 
                </div>
                <div className='col-1-of-2 border-around'>
                    <h1 className='section-blog__header--one'>Web Studios Resources</h1>
                    <p className='section-blog__paragraph blog-paragraph'>Your one-stop shop for all the resources you will ever need
                    to get started working on your business because we understand how valuable and time-consuming to find things are. We have put together this collection of the best free resources to help you at any stage of your entrepreneur journey.
                    </p>
                    <div className='newsletter-container'>
                    <a href='https://webstudiosnews.herokuapp.com/' className='btn btn--main'>Join our newsletter</a>
                    </div>
                </div>
            </div>
            <div className='row'>
            <h2 className='resources-header-two'>Design Tools</h2>
                <div className='col-1-of-2'>  
                    <div className='box-div'>
                        <div className='box-div__left'>
                            <a href='https://www.canva.com/login' target='_blank' rel='noopener noreferrer' className='resources-link'>
                                <img src={canva} alt='canva' className='resources-img' />
                                <h3 className='box-div__header-three'>Canva</h3>
                            </a>
                            <p className='box-div-paragraph'>This is an amazing free design tool for graphic design, create social media graphics, presentations, posters, and so much more. .</p>
                        </div>
                    </div>
                </div>
                <div className='col-1-of-2'>
                    <div className='box-div'>
                        <div className='box-div__left'>
                            <a href='https://unsplash.com/' target='_blank' rel='noopener noreferrer' className='resources-link'>
                                <img src={unsplash} alt='canva' className='resources-img' />
                                <h3 className='box-div__header-three'>Unsplash</h3>
                            </a>
                                <p className='box-div-paragraph'>Find beautiful assets for your brand. All images are Royalty free and will get you up and running.</p>
                            
                        </div>
                    </div>
                    <div className='box-div'>
                        <div className='box-div__left'>
                            <a href='https://www.figma.com/' target='_blank' rel='noopener noreferrer' className='resources-link'>
                                <img src={figma} alt='canva' className='resources-img' />
                                <h3 className='box-div__header-three'>Figma</h3>
                            </a>
                                <p className='box-div-paragraph'>Figma is a vector graphics editor and prototyping tool which is primarily web-based, it is more advance but gives you more control for your designing purposes.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='tc' style={{fontSize: '2rem'}}>Please note more resources are coming for you. We are constantly putting more tools on here that we use personally.</h3>
        </section>
    )
}

export default Resources;