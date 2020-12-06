import React from 'react';
import './Journey.scss';
import me from './img/resized2.jpeg';
import journey from './img/journey.jpg';
import Sidebar from '../Sidebar/Sidebar';
import OtherRealted from '../OtherRelated/OtherRelated';
import {Helmet} from "react-helmet";
import logo from './img/logo.png';
import { Link } from 'react-router-dom';

const Journey = () => {
  return(
    <section className='section-blogItem'>
       <Helmet>
         <title>Journey Updates Montly | Web Studios</title>
         <meta name="description" content='Journey updates monthly focuses updates the founder of Web Stuios is going through as it tries to get a Job in software engineering.' />
       </Helmet>
       <Sidebar />
      <div className='header__logo-box'>
          <Link to='/'>
            <img src={logo} alt='alt' className='header__logo'/>
          </Link>
      </div>
      <div className='section-blogItem__container--box'>
        <h2 className='section-blogItem__header--two' >How I studied and landed my first interview in 9 months.<span role='img' aria-label="Close"> 💻🤖 </span> </h2>
        <img src={me} className='section-blogItem__image' alt='me' />
        <p>Jonathan Aguilar</p>
        <p>Founder</p>
        <p>November 12, 2020, 11 Min Read</p>
        <p className='section-blogItem__tags'>Journey</p>
      </div>

      <div className='section-blogItem__box'>
        <img src={journey} alt='' className='section-blogItem__img'/>
        <p className='credit'>Picture by https://codewithmosh.com/p/mastering-react</p>
        <h3 className='section-blogItem__header--three heading-secondary u-margin-top-large header-courses'>The beginning</h3>
        <p className='section-blogItem__paragraph--one'>
          I want to first say that I have a bachelors degree in Information systems from Rutgers University. 
          In school I got to learn a plethora of differnt tools relating to technology. Some classes included programing languages like
          Java programming language, and HTML and CSS. That was the extent of programing langues they taught for my degree. 
          Other technical classes included systems design and databases. One of my best courses was UX design in where my team and I built a mockup for a fitness app.
          All these classes give you a an introduction of a potentail career in the technology space like front end developer or ux design. Even database management. 
          However, you need to be responsible outside of school and learn other tools to be prepared for a job. The reality is the curriclum...does 
          not teach everything you need to best prepare you for a career in any area of technology. 
          I did not do any of that outside of school and wasted my free time doing other stuff for fun. 
          So that hindered me quite a bit. Even if I did the responsible thing in learning what school taught it would be obselete by the time I graduated.
          Even if I also was responsible to learn outside of school things change rather quick in the real world. 
          The point here is <strong>I did not become a ready employeed after I graduated and even if I was responsible 
            in learning during that time it would still be hard</strong>
        </p>
        <p className='section-blogItem__paragraph--one'>
          You see to master something takes consistency so before school started I started buying some Udemy courses and wanted to learn web developement 
          and the Colt Steele course, a bootcamp like course, helped me alot. For those who do not know Udemy is a website that allows you purchase courses 
          of any area and learn from intructors. The best part is that is priced affordably. There is really no excuses. Now the Colt Steele course
          <a href='https://www.udemy.com/course/the-web-developer-bootcamp/' target='_blank' rel="noopener noreferrer"> Colt Steele Course</a> gave me 
          a glimpse of what web development is all about. I remember studying one summer before the first semester at Rutgers University. 
          I studied that course as best as possible and I even threw in a course in Java. Another great course on Udemy. 
          <a href='https://www.udemy.com/course/java-the-complete-java-developer-course/' target='_blank' rel="noopener noreferrer"> Java course </a> That was a starting
          point for me. I would still recommend them as there have been updates so there is good content still. However, 
          please note that no one course will make you a developer or even a developer that should be hired. 
          For me, after that summer I stopped coding and focused on school. That first semester was motivating and I no longer focused on Udemy.
          Looking back I do not know why school drained my motivation for coding but I just know I was over it at some point and was unclear as to what I wanted to 
          do. Years passed and I did not code. I graduated school and I still was not ready for a job. It was 2019 and I was lost. I felt like I was not good enough.
          Especially not as a software engineer. Not by a long shot. Anyways, I applied everywhere and even at jobs that were degrees were 
          not required and not related my major. I did so because I was desprate to find employment but no one would hire me after school which 
          was the worse thing in the world. I had no money at all and not to mention credit card debt, student loans, and day to day expenses.
       </p>
        <p className='section-blogItem__paragraph--one'>I said to myself what I am going to do with no job.</p>

        <h3 className='section-blogItem__header--three heading-secondary u-margin-top-large header-courses'>Dec 2019</h3>
        <p className='section-blogItem__paragraph--one'> I spent the whole year surviving with little money and putting my efforts 
        to exercising and imporving my health. I also applied for NJSP<a href='https://www.njsp.org/'> NJSP Website</a> because 
        that was a great alternative to having some money and building myself up. I later got denied :( I was upset about it but 
        knew that I was not going to be happy anyways. Pherhaps in a later blog I can talk some more about the NJSP experience that lasted a year and some change.
        Anyways on December 2019 I manage to get a job near my area doing scanning making $12/hourly. <span role='img' aria-label='this'>🧑🏼</span>
        On February 2020 after I worked for a couple of months at the scanning place I went back to Udemy and got a course called the
        compete web developer course <a href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/' target='_blank' rel="noopener noreferrer"> Course. </a> 
        Since it was higly rated I learn a lot...although challenging, pushing your skills to the next level requires a challening course. 
        Side note for those who are still not sure what Udemy course to get for web development get this one.
        I finally took faith into my hand and buckled down and I have been learning web development for the past 8 months. I finally manage to work on my dream.
        My journey with code clearly has not been easy. I started 4 years ago during my college years and it was until after that I had the maturity level to work on my dream. 
        I had start once again. Now I am way more confident than I was before. 
        <strong>There is no cindarella story here because I am still not hired and I am still looking my first job. Though the confidence level is higher now :)</strong>
         </p>
        <p className='section-blogItem__paragraph--one'>
          My path is I learned front end with React and Sass, and some backend with Node. 
          However, right now I want to get even better with React and Sass and so 
          I am currently building a neat E-commerce website. That being said I have 
          my first Software engineer interview next month and I am extremely excited for.
          It is one of the top companies and my first interview for software engineering role. 
          I have been working very hard and I want a better job. 
          I cannot say the name, but just know the is in the area. I have so much content and blogging to do because I want share with you my journy.
          <strong> Every month I will blog my journey and give you and update of what I have been up to</strong>
        </p>

        <p className='section-blogItem__paragraph--one'>If you are new and need a great
         all around course to become a web developer that course above is great 
         but if you are looking for something more beginner 
         level look no further than <a href='https://www.udemy.com/course/the-complete-web-development-bootcamp/ ' target='_blank' rel="noopener noreferrer">Angela Yuu</a> She does an amazing job at teaching you the fundamentals and you will become great at them. Again the best way to learn is by doing it yourself and starting up some projects that you are into. 
         Finally, I am very excited about this positon as a software engineer and I will give it my all I hope I get it.</p>
      </div>

      <OtherRealted />
    </section>
  )
}

export default Journey;