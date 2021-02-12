import React from 'react';
import { MdDone } from "react-icons/md";
import { MdPhonelinkRing } from "react-icons/md";
import { MdLocalGroceryStore } from "react-icons/md";
import Particles from 'react-particles-js';
import './Feature.scss';

const Feature = () => {
  return(
    <section className='section-features'>
       <Particles className='particles'
          params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }} />
      <div className='row'>
        <div className='col-1-of-3'>
          <div className='feature-box'>
            <MdDone className='feature-box__icon'/>
            <h3 className='heading-teritary u-margin-bottom-small'>Fast and Reliable</h3>
            <p className='feature-box__text'>We offer reliable and fast return rate for projects that are given to us. You can expect exceptional service. </p>
          </div>
        </div>
        <div className='col-1-of-3'>
          <div className='feature-box'>
            <MdPhonelinkRing className='feature-box__icon'/>
            <h3 className='heading-teritary u-margin-bottom-small'>24/7 Access</h3>
            <p className='feature-box__text'>We are available to answer your questions or concerns any time you like. 24 hours open communication.</p>
          </div>
        </div>
        <div className='col-1-of-3'>
          <div className='feature-box'>
            <MdLocalGroceryStore className='feature-box__icon'/>
            <h3 className='heading-teritary u-margin-bottom-small'>Flexible</h3>
            <p className='feature-box__text'>We can build your next project in a variety of platforms including Shopify or Squarespce because we understand customer needs.</p>
          </div>
        </div>

      </div>
      <div className='tc'>
      <a href='https://calendly.com/webstudios/15min' className='btn btn--white'>Book a quick call</a>
      </div>
      
    </section>
  )
}

export default Feature;