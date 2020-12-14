import React from 'react';
import './BlogItem.scss';
import React1 from './img/React1.jpg';
import sass from './img/sass.png';
import aws from './img/aws.png';
import Sidebar from '../Sidebar/Sidebar';

import Newsletter from '../Newsletter/Newsletter';
import logo from './img/logo_transparent.png';
import resized from './img/resized2.jpeg';
import { Link } from 'react-router-dom';
import DifferentBlog from '../DifferntBlog/DifferntBlog';
import {Helmet} from "react-helmet";

function BlogItem() {
    return( 
      <section className='section-blogItem'>
        <Helmet>
         <title>Techie Monthly | Web Studios</title>
         <meta name="description" content='Techie monthly are articles every month that focuses on the technologies everyone should get into because they are hot, and awesome.' />
        </Helmet>
        <Sidebar />
        <div className='header__logo-box'>
          <Link to='/'>
            <img src={logo} alt='alt' className='header__logo'/>
          </Link>
        </div>
        <div className='section-blogItem__container--box'>
          <h2 className='section-blogItem__header--two' >Amazing Technologies Right Now  <span role='img' aria-label="Close">💻🚀</span> </h2>
          <img src={resized} className='section-blogItem__image' alt='me' />
          <p>Jonathan Aguilar</p>
          <p>Founder</p>
          <p>November 9, 2020, 11 Min Read</p>
          <p className='section-blogItem__tags'>Technologies</p>
        </div>
        
        <div className='section-blogItem__box'>
          <img src={React1} alt='' className='section-blogItem__img'/>
          <p className='credit'>Picture by https://codewithmosh.com/p/mastering-react</p>
          <h3 className='section-blogItem__header--three heading-secondary u-margin-top-large header-courses'>React</h3>
          <p className='section-blogItem__paragraph--one'>
          React was the first technology that I was able to appreciate as a beginner. 
          This is because when I hit the stage of using a front end framework 
          I combined everything that I learned into it. I was able to realized 
          that you can combine all these front technolgies with it and create beautiful 
          interfaces and being able to scale. Everything seemed to be connected. Connected in a way that I felt it was not before. 
          Javascript seem to be complex and the complexity of it made me question why do we need to learn of these things. I had learn the fundamentals but I still did not know what to do with it. I also felt the gap of learning it was difficult. When I first started learning React I loved it.
          </p>
          <p className='section-blogItem__paragraph--one'>React seems to be the perfect entry for creating web applications fast! One thing I hear Is that you should not be married to any framework because just as quick a technology can come a framework can go. That was very much a great thing to note. This is because you have to be able to pivot and love technologies but also be able to get with the time. I want to leave everybody with this...can anyone say why React is at the forefront of front technolgies? if you can shed some perspect please contact me because as a beginner I would like to gain insight on React some more. Cheers.  </p>
        </div>
  
        <div className='section-blogItem__box'>
          <img src={sass} alt='' className='section-blogItem__img u-margin-top-large'/>
          <p className='credit'>Picture by https://www.grapecity.com/blogs/customizing-javascript-styles-with-sass</p>
          <h3 className='section-blogItem__header--three heading-secondary header-courses'>SASS</h3>
          <p className='section-blogItem__paragraph--one'>
          When I think of sass I think of upscale. It may sound weird but this technology just screams upscale. When I first started incorporating Sass with my css I never wanted to go. Using the BEM methodology I find it easier than ever to keep on track of your project and be efficient. You see as projects get bigger and bigger having system in place as you build components you then are able to create less bugs and compartments that do not connect with eachother. This is important. As a beginner I always asked myself how can we do this more efficient with css. It always seem like css was stuck in the stone age. You copy and paste things on your index.html into your next page and delte what you do not need and then put your content. Sass using the 7-1 architeture breaks down your finles into reusable pieces and even if you do need that much code splitting because your project is small there is room for growth.
          </p>
          <p className='section-blogItem__paragraph--one'>
          Furthermore, using plain CSS can be time consuming and so with no real architeture to your code it gets consuing fast. When you are beginning and you are building a project on your own it get hard fast and is best to use Sass you feel fancy doing it and very accomplish knowing that you are pushing css to its limits. You will imporve your css fast and think to yourself why you have not done this earlier. Let me hear why you like Sass or maybe you prefer something else like less?
          </p>
        </div>
  
        <div className='section-blogItem__box'>
          <img src={aws} alt='' className='section-blogItem__img u-margin-top-large'/>
          <p className='credit'>Picture by https://www.testpreptraining.com/blog/how-to-pass-aws-certified-developer-associate-exam/</p>
          <h3 className='section-blogItem__header--three heading-secondary header-courses'>AWS Certification</h3>
          <p className='section-blogItem__paragraph--one'>
          So one day I decided it was time for me to get some great certifications to make me stand out from other junior developers applying to the same position I am. I decided on aws mainly because everything is cloud base now. Companies look for people to know the cloud and also projects that I do over my career should scale and so Amazon is perfrect for that. I hear great about it and it is honestly a breath of fresh air from the coding that I do. Suprisingly however Is that you still get practive on the things you need to know a developer like the terminal, databases, scripts, website development and networking. Everything is connected. That is the key that I see in development. Everything is connected. You do a project in one area but you still have to work with all areas to create an awesome project. Right now I am focusing on this certification and learn serverless technoloiges, work with the cloud, and understand databases. I believe this a huge stepping stone for me. If you would like to know an update on how it went with the exam please let me know and I will updated you thank you.
          </p>
        </div>
        
        <Newsletter />
        <DifferentBlog />
      </section>
    )
  
}

export default BlogItem;