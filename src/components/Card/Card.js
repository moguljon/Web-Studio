import React from 'react';
import './Card.scss';

const Card = ({ id, title, paragraph, img, link}) => {
  return(
    <div className='section-blog__other'>
        <div>
          <article className='section-blog__card'>
            <img src={img} alt='' className='section-blog__image' />
            <h3 className='section-blog__header--three'>{title}</h3>
            <p className='section-blog__paragraph'>{paragraph}</p>
            <a href={link} target='_blank' rel="noopener noreferrer">Read More</a>
          </article>
      </div>
    </div>







  //   <div className='section-blog__other'>
  //     <div className='row'>
  //       <div className='col-1-of-3'>
  //         <article className='section-blog__card'>
  //           <a href='https://webstudios.medium.com/how-i-studied-and-landed-two-interviews-in-9-months-e58e2aea9e3' target='_blank' rel="noopener noreferrer">
  //             <img src={programming} alt='journey' className='section-blog__image' />
  //           </a>
  //           <h3 className='section-blog__header--three'>How I self-studied web development and landed my first interview in 9 months. <span role="img" aria-label='a tag'>💻</span></h3>
  //           <p className='section-blog__paragraph'>
  //           I want to first say that I have a bachelors degree in Information systems, 
  //           so in school you get to learn about Java as well..<a href='https://webstudios.medium.com/how-i-studied-and-landed-two-interviews-in-9-months-e58e2aea9e3' target='_blank' rel="noopener noreferrer">Read more</a>
  //           </p>
  //         </article>
  //       </div> 
  //     <div className='col-1-of-3'>
  //       <article className='section-blog__card'>
  //         <a href='https://webstudios.medium.com/amazing-technologies-right-now-ff1c46f84e9f' target='_blank' rel="noopener noreferrer">
  //           <img src={journey} alt='technology' className='section-blog__image' />
  //         </a>
  //         <h3 className='section-blog__header--three'>Amazing technologies right now</h3>
  //         <p className='section-blog__paragraph'>
  //         React was the first technology that I was able to appreciate as a beginner. 
  //         This is because when I hit the stage of using..   
  //         <a href='https://webstudios.medium.com/amazing-technologies-right-now-ff1c46f84e9f' target='_blank' rel="noopener noreferrer">
  //          Read more
  //         </a>
  //         </p>
  //       </article>
  //     </div> 
  //     <div className='col-1-of-3'>
  //       <article className='section-blog__card'>
  //         <a href='https://webstudios.medium.com/best-udemy-courses-for-web-development-9fbd41f55bfd' target='_blank' rel="noopener noreferrer">
  //           <img src={udemy} alt='udemy' className='section-blog__image' />
  //         </a>
  //         <h3 className='section-blog__header--three'>Best Udemy Courses for Web Development</h3>
  //         <p className='section-blog__paragraph'>
  //           Udemy is one of the best rources to learn web development and has allowed me to level 
  //           up my developer skilss 10 folds..<a href='https://webstudios.medium.com/best-udemy-courses-for-web-development-9fbd41f55bfd' target='_blank' rel="noopener noreferrer">Read more</a>
  //         </p>
  //       </article>
  //     </div>
  //   </div>
  // </div>

  
  )
}

export default Card;