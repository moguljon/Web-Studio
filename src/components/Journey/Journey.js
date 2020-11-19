import React from 'react';
import './Journey.scss';
import me from './img/resized2.jpeg';
import journey from './img/journey.jpg';
import Sidebar from '../Sidebar/Sidebar';
import OtherRealted from '../OtherRelated/OtherRelated';
import {Helmet} from "react-helmet";

const Journey = () => {
  return(
    <section className='section-blogItem'>
       <Helmet>
         <title>Journey Updates Montly | Web Studios</title>
         <meta name="description" content='Journey updates monthly focuses updates the founder of Web Stuios is going through as it tries to get a Job in software engineering.' />
       </Helmet>

      <Sidebar />
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
          I want to first say that I have a bachelors degree in Information systems, 
          so in school you get to learn about Java as well OOP - Object-Oriented 
          Programming. I also got to learn about HTML and CSS. Also, systems design
           and databases. All these technlogies needed to become a great software 
           enginner. Enough of that disclaimer, however, because that only 
           introduced me to those technologies not 
           made me job ready. Before school started
          I started buying some Udemy courses and wanted to learn web developement 
          and the colt steele course, a bootcamp like course, helped me alot. 
          <a href='https://www.udemy.com/course/the-web-developer-bootcamp/' target='_blank' rel="noopener noreferrer">Colt Steele Course</a>
          I remember studying one summer before the first semester at Rutgers University.
           I studied that course as best as possible and I even threw in a course in Java.
            Again a great course on Udemy. 
          <a href='https://www.udemy.com/course/java-the-complete-java-developer-course/' target='_blank' rel="noopener noreferrer"> Java course</a>
        </p>
        <p className='section-blogItem__paragraph--one'>All of these are great starting point 
        heck there has been update on that course of cot steele and is great material, 
        however, please note that no one course will make you a developer or even a 
        developer that should be hired. For me, after that summer I stopped coding 
        and focused on school. I graduated school and I still was not ready for a job 
        as a software engineer, not by a long shot. No one would hire me after school 
        which was the worse thing in the world. Finally I was able to land a job making 
        $12 working less than 40 hours per week. <span role='img' aria-label='this'>🧑🏼</span></p>
        <p className='section-blogItem__paragraph--one'>I said to myself it was time to buckled down and really take my faith into my own hands and learn software engineer even get my first role the same year. February 2020.</p>

        <h3 className='section-blogItem__header--three heading-secondary u-margin-top-large header-courses'>February 2020</h3>
        <p className='section-blogItem__paragraph--one'>I got a course called the
         compete web developer course. <a href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/' target='_blank' rel="noopener noreferrer">Course</a> It works great and is higly rated you can really learn a lot...although challenging, pushing your skills to the next level requires a challening course. For those who are still not sure what Udemy, it is simply a platform where you go to, to learn new skills in many industries in our case tech. So you will find many courses the langues that you would like to know. I want say that I buckled down and have learned development for the past 8 motnhs none stop. For me this type of schedule is needed because I learn slower than others. My journey with code has not been easy. I started before college. 4 years after college 
         I had start once again. Now I am way more confident than I was before.</p>
        <p className='section-blogItem__paragraph--one'>
          So learned front end with React and Sass, and some backend with node. 
          However, right now I want to get even better with React and Sass and so 
          I am currently building a neat E-commerce website. That being said I have 
          my first Software engineer interview next month and I am extremely excited to do. 
          This is because I have been working very hard and I want to have a better job. 
          I cannot say the name, but just know a know company in the area. Please contact me 
          if you want furter details into the course on Udemy I am doing now, my recent 
          update on the interview, and how to best prepare for a technical interview.
        </p>

        <p className='section-blogItem__paragraph--one'>If you are new and need a great
         all around course to become a web developer that course above is great 
         but if you are looking for something beinnger level look further than <a href='https://www.udemy.com/course/the-complete-web-development-bootcamp/ ' target='_blank' rel="noopener noreferrer">Angela Yuu</a> She does an amazing job at teaching you the fundamentals and you will become great at them. Again the best way to learn is by doing it yourself and starting up some projects that you are into. Finally, I am very excited about this positon as a software engineer and I will give it my all I hope I get it. So friends do not be discourage if you are making as little as me in a job just have your eyes on the prize and work on it everyday to change your life. Cheers.</p>
      </div>

      <OtherRealted />
    </section>
  )
}

export default Journey;