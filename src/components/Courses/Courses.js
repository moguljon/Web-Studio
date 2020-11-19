import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import me from './img/resized2.jpeg';
import './Courses.scss';
import Newsletter from '../Newsletter/Newsletter';
import RelatedBlog from '../RelatedBlog/RelatedBlog';
import {Helmet} from "react-helmet";
// import logo from './img/logo.png';
// import { Link } from 'react-router-dom';


const Courses = () => {
  return(
    <section className='section-courses'>
       <Helmet>
         <title>Coursehero Monthly | Web Studios</title>
         <meta name="description" content='Course hero monthly gives you an insight on the best courses to get you hired as a software engineer and fast track you to a successful career' />
        </Helmet>
        <Sidebar />
        {/* <div className='header__logo-box'>
          <Link to='/'>
            <img src={logo} alt='alt' className='header__logo'/>
          </Link>
        </div> */}
        <div className='section-blogItem__container--box'>
          <h2 className='section-blogItem__header--two' >Best Udemy Courses for Web Development <span role='img' aria-label="Close">💻🚀</span> </h2>
          <img src={me} className='section-blogItem__image' alt='me' />
          <p>Jonathan Aguilar</p>
          <p>Founder</p>
          <p>November 17, 2020, 11 Min Read</p>
          <p className='section-blogItem__tags'>Courses</p>
        </div>

        <div className='section-blogItem__box'>
          {/* <img src={react1} alt='' className='section-blogItem__img'/>
          <p className='credit'>Picture by https://codewithmosh.com/p/mastering-react</p> */}
          <h3 
          className='section-blogItem__header--three heading-secondary u-margin-top-large header-courses'>Advance CSS and SASS - Jonas</h3>
          <p className='section-blogItem__paragraph--one'>
          Udemy is one of the best resources to learn web development and has allowed me to level up my 
          developer skils 10 folds when I started using it. 
          Now let me say that I do not have hundreds of courses that 
          I have purchased ont here, I have about 11. 
          These courses are top rated however, not only for the content but for the instructor. 
          Keep in mind, though, that the best teacher is your own self. <a href='https://www.udemy.com/course/advanced-css-and-sass/' target='_blank' rel="noopener noreferrer" > Advance CSS with Sass Course 
          </a> is among the very best and is one of the few in the Udemy platform that has 4.8 stars. 
          I have taken a few CSS courses and nothing beats it. 
          You see when learning a subject you do not want to just have an instructor just coding 
          and not explaining, especially in the hard parts. <strong>Jonas</strong> 
          explains everything in a deep level and goes beyond subject. 
          This courses focuses on the basics of HTML and CSS but shows you behind the scene into how 
          the page renders the content part by part, understanding how each part does its job.
          Furthermore, it goes a step further than that and shows you <a href='https://sass-lang.com/guide' target='_blank' rel="noopener noreferrer" > SASS </a>, <strong>
            CSS with superpowers</strong>.
          Trust me when I tell you SASS is the way to go, you want to learn SaSS to make your workflow 
          predictable. As you start building projects you need to have a predictable workflow to catch bugs easier.
          I have lerned with building this website that things get complex, very very quick. Sometimes 
          it can be quite difficult 
          and so SASS will give you the architecture, that is the 7:1 architecture to scale your projects. 
          Not to mention the BEM - Block Element Modifer. 
          A way to structure your projects.  
          I admit, however, this course is 3 years old but it does not matter, 
          in fact, it was only a months ago that I purchased this because it is still relavant and you 
          will cover all topics to become a css ninja. 
          CSS I found to be so essential as I move in React for example, 
          because it allows you not focus on on libaryies for UI. Me? 
          I like creating my UI - User Interface from the ground up. 
          That is building an eastically pleasing website without relying on libaries.
          <strong>This course will make you become a strong 
              CSS ninja that will allow you to creating advance user interfaces and not rely on libaries 
              and not worry about the front end. </strong>
          
          </p>
        </div>
        <div className='section-blogItem__box'>
          {/* <img src={react1} alt='' className='section-blogItem__img'/> */}
          {/* <p className='credit'>Picture by https://codewithmosh.com/p/mastering-react</p> */}
          <h3 className='section-blogItem__header--three heading-secondary u-margin-top-large header-courses'>The Complete Web Developer in 2021 - Andrei</h3>
          <p className='section-blogItem__paragraph--one'>
          This course was my first introduction to the complete web developer role and that I got to really drill
          the basics of the role. There are several top notch courses that covers all the topics of a web developer
          and If someone were to ask me which one I would pick, I would say it depends. There are two this one and Angela Yu's
          <a href='https://www.udemy.com/course/the-complete-web-development-bootcamp' target='_blank' rel="noopener noreferrer" > Complete Developer Bootcamp</a> and depending on your skill level that you should buy.
          If you are feeling extra motivated you can certainily buy both. Andrei's course is a little bit more advance but will be worth because it dives deep into the core of front end.
          What is facisinating about this course is that...Javascript and the depth it is covered is amazing. React the depth that is covered is amazing. The final project that is covered and built is amazing. 
          It is challening and I struggled with the backend of it particularly when we tried to deploy it..it gets very tricky. For me he is the 
          best and helping you become a great developer with the Javascript section as well as React. It is mondern take on the subject.
          If you are interested in learning more about it please visit it <a href='https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery'  rel="noopener noreferrer" target='_blank'>Complete Web Developer Course</a>

          Interestingly enough he has some other wonderful courses that also will be worth it and that I highly reccommned and like I said before
          there is only a handful of courses on Udemy that have a whopping 4.8 stars it just so rare that when you do see it, you know that is exepetional
          <a href='https://www.udemy.com/course/advanced-javascript-concepts' target='_blank' rel="noopener noreferrer" > Advance Javascript</a> is one of those exeptional coures for him that goes
          behind the scenes and teaches you the hard parts and why Javascript. <strong>You get these courses and you will not regret I haver personally became more confident with my coding in these 9 months of doing it. Happy coding! <span role='img' aria-label='somethingelse'>🙃</span></strong>
          Some honorable mentions are Angela Yu's and Jonas HTML and CSS first course.
          </p>
        </div>
        <Newsletter />
        <RelatedBlog />
    </section>
  )
}

export default Courses;