import React from 'react';
import { MdDone } from "react-icons/md";
import { MdPhonelinkRing } from "react-icons/md";
import { MdLocalAirport } from "react-icons/md";
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
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <MdDone className='feature-box__icon'/>
            <h3 className='heading-teritary u-margin-bottom-small'>Fast and Reliable</h3>
            <p className='feature-box__text'>We offer the most reliability and best designs to our clients and making sure we give the project back fast.</p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <MdPhonelinkRing className='feature-box__icon'/>
            <h3 className='heading-teritary u-margin-bottom-small'>24/7 Access</h3>
            <p className='feature-box__text'>We provide open communication 24 hours a day 7 days a week for any questions.</p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <MdLocalAirport className='feature-box__icon'/>
            <h3 className='heading-teritary u-margin-bottom-small'>Scalable</h3>
            <p className='feature-box__text'>Our web apps are meant to scale because we understand how fast an organization can grow.</p>
          </div>
        </div>
        <div className='col-1-of-4'>
          <div className='feature-box'>
            <MdLocalGroceryStore className='feature-box__icon'/>
            <h3 className='heading-teritary u-margin-bottom-small'>Many Plaforms</h3>
            <p className='feature-box__text'>We are able to build your next project with Shopify or Sqaurespace if you would like to use that instead.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature;