import React from 'react';
import './Newsletter.scss';

const Newsletter = () => {
  return(
    <section className='section-newsletter'>
       <div className='newsletter'>
         <div className='row other-page'>
           <div className='col-1-of-2 '>
             <h2 className='header--two'>Sign Up to our newsletter</h2>
           </div>
           <div className='col-1-of-2'>
             <input type='text' className='input' placeholder='Email' />
             <button type='submit' className='btn-submit'>Sign Up</button>
             <p>no spam ever. Unsubscribe Anytime.</p>
           </div>
         </div>
       </div>
    </section>
  )
}

export default Newsletter;