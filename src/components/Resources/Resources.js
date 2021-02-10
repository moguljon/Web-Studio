import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet"; 
import ws from './img/W-S-logo.png';
import astro from './img/resized.jpeg';
import './Resources.scss';
import canva from './img/canva1.jpg';
import unsplash from './img/unsplash1.jpg';
import figma from './img/figma1.jpg';
import squarespace from './img/squarespace1.jpg';
import shopify from './img/shopify1.jpg';
import wix from './img/wix1.jpg';
import webflow from './img/webflow.jpg';

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
            <div className='row space'>
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
         
            <div className='row space'>
                <h2 className='resources-header-two space'>Best Website Builders</h2>
                <div className='col-1-of-2'>
                    <div className='content content2'>
                        <a href='https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-us-en-squarespace-core-e&subcampaign=(brand-core_squarespace_e)&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-us-en-squarespace-core-e&utm_term=squarespace&gclid=CjwKCAiAjeSABhAPEiwAqfxURftPehNl9wpfXyAKaj5XqaOZddrrQzdXnFiBY5lHVUAjbZ7Xua8deRoCPn4QAvD_BwE' target='_blank' rel="noopener noreferrer">
                            <img src={squarespace} alt='' className='content__img2' />
                        </a>  
                        <div className='content__all'>
                            <h3 className='content__header-three'>Squarespace</h3>
                            <p className='content__paragraph'>Squarespace is my personal favorite and has the most beautiful templates around. Squarespace, is an American website building and hosting company which is based in New York City, United States. It provides software as a service for website building and hosting, and allows users to use pre-built website templates and drag-and-drop elements to create and modify webpages</p>
                            <p className='content__paragraph'>Furthermore, it has a way to create web pages unique to others. I find that some template builders look generic and that makes it unoriginal. You can also put custom code on it for a even better custom build.</p>
                        </div>
                    </div>
                </div>
                <div className='col-1-of-2'>
                    <div className='content content__display'>
                        <div className='content__img-container'>
                            <a href='https://www.shopify.com/free-trial?&term=shopify&Network=Search&SiteTarget=&mt=e&adid=268900212216&device=c&test=&adpos=&CampaignId=788843419&gclid=CjwKCAiAjeSABhAPEiwAqfxURQ22bM4QD-TPGTzdQ7UxC5trnVgDFkP25jneGd4uC3btr0T3xMatDxoCJLoQAvD_BwE' target='_blank' rel="noopener noreferrer">
                                <img src={shopify} alt='' className='content__img' />
                            </a>
                        </div>
                        <div className='content__all'>
                            <h3 className='content__header-three'>Shopify</h3>
                            <p className='content__paragraph'>Shopify Inc. is a Canadian multinational e-commerce company headquartered in Ottawa, Ontario. It is also the name of its proprietary e-commerce platform for online stores and retail point-of-sale systems.</p>
                        </div>
                    </div>
                    <div className='content content__display'>
                        <div className='content__img-container'>
                            <a href='https://webflow.com/?gclid=CjwKCAiAjeSABhAPEiwAqfxURdvo6IsGA88nLpNm8gs23gcUsrlnC9QPvsK9OIt3esm5msOUkKAYdRoCaHMQAvD_BwE' target='_blank' rel="noopener noreferrer">
                                <img src={webflow} alt='webflow' className='content__img' />
                            </a>
                        </div>
                        <div className='content__all'>
                            <h3 className='content__header-three'>Webflow</h3>
                            <p className='content__paragraph'>Webflow, Inc. is an American company, based in San Francisco, that provides software as a service for website building and hosting. Their online visual editor platform allows users to design, build, and launch websites. </p>
                        </div>
                    </div>
                    <div className='content content__display'>
                        <div className='content__img-container'>
                            <a href='https://www.wix.com/freesitebuilder/hiker-create?cq_term=wix&gclid=CjwKCAiAjeSABhAPEiwAqfxURfp9Xbure8in_uOEUIeM3fc5MAukGOju6tPIBi5oQkhc9-zhQZABWhoCoA0QAvD_BwE&cq_cmp=195454540&cq_plt=gp&cq_plac=&cq_con=10375167220&cq_src=google_ads&cq_pos=&cq_net=g&cq_med=' target='_blank' rel="noopener noreferrer">
                                <img src={wix} alt='canva' className='content__img' />
                            </a>
                        </div>
                        <div className='content__all'>
                            <h3 className='content__header-three'>Wix</h3>
                            <p className='content__paragraph'>Wix.com Ltd. is an Israeli software company, providing cloud-based web development services. It allows users to create HTML5 websites and mobile sites through the use of online drag and drop tools. </p>
                        </div>
                    </div>
                </div>
            </div>
         
            <h3 className='tc' style={{fontSize: '2rem'}}>Please note more resources are coming for you. We are constantly putting more tools on here that we use personally.</h3>
        </section>
    )
}

export default Resources;