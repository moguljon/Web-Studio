import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet"; 
import ws from './img/W-S-logo.png';
import astro from './img/astro.jpeg';
import './Resources.scss';
import canva from './img/canva1.jpg';
import unsplash from './img/unsplash1.jpg';
import figma from './img/figma1.jpg';

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
            <div className='row'>
                <div className='col-1-of-2'>
                    <img src={astro} alt='blog' className='team' /> 
                </div>
                <div className='col-1-of-2 border'>
                    <h1 className='content__header-one'>Business Resources</h1>
                    <p className='content__paragraph1'>Your one-stop shop for all the resources you will ever need to get started working on your business because we understand how valuable and time-consuming to find things are. We have put together this collection of the best free resources to help you at any stage of your entrepreneur journey.</p>
                    <a href='https://webstudiosnews.herokuapp.com/' target='_blank' rel="noopener noreferrer" className='btn btn--main tc resource-btn'>Newsletter</a>
                </div>
            </div>
            <div className='row'>
                <h2 className='resources-header-two'>Design Tools</h2>
                <div className='col-1-of-2'>
                    <div className='content'>
                        <a href='https://unsplash.com/' target='_blank' rel="noopener noreferrer">
                            <img src={unsplash} alt='' className='content__img2' />
                        </a>  
                        <div className='content__all'>
                            <h3 className='content__header-three'>Unsplash</h3>
                            <p className='content__paragraph'>Unsplash is a website dedicated to sharing stock photography under the Unsplash license. The website claims over 207,000 contributing photographers and generates more than 17 billion photo impressions per month on their growing library of over 2 million photos.</p>
                        </div>
                    </div>
                </div>
                <div className='col-1-of-2'>
                    <div className='content content__display'>
                        <div className='content__img-container'>
                            <a href='https://www.figma.com/' target='_blank' rel="noopener noreferrer">
                                <img src={figma} alt='' className='content__img' />
                            </a>
                        </div>
                        <div className='content__all'>
                            <h3 className='content__header-three'>Figma</h3>
                            <p className='content__paragraph'>Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows. The Figma Mirror companion apps for Android and iOS allow viewing Figma prototypes on mobile devices.</p>
                        </div>
                     
                    </div>
                    <div className='content content__display'>
                        <div className='content__img-container'>
                            <a href='https://www.canva.com/q/pro/?v=2&utm_source=google_sem&utm_medium=cpc&utm_campaign=REV_US_EN_CanvaPro_Branded_Tier1_Core_EM&utm_term=REV_US_EN_CanvaPro_Branded_Tier1_Canva_EM&gclid=EAIaIQobChMIqbuw5-XM7gIVmoVaBR2I1AhiEAAYASAAEgIhN_D_BwE&gclsrc=aw.ds' target='_blank' rel="noopener noreferrer">
                                <img src={canva} alt='canva' className='content__img' />
                            </a>
                        </div>
                        <div className='content__all'>
                            <h3 className='content__header-three'>Canva</h3>
                            <p className='content__paragraph'>Canva is a graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content. The app already includes templates for users to use. The platform is free to use and offers paid subscriptions like Canva Pro and Canva for Enterprise for additional functionality.</p>
                        </div>
                    </div>
                </div>
            </div>
         
            <h3 className='tc' style={{fontSize: '2rem'}}>Please note more resources are coming for you. We are constantly putting more tools on here that we use personally.</h3>
        </section>
    )
}

export default Resources;