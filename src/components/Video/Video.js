import React from 'react';
import './Video.scss';
import free from './img/free.mp4';

const Video = () => {
    return(
        <section className='video'>
            <div className='bg-video'>
                <video className='bg-video__content' autoPlay muted loop>
                <source src={free} type='video/mp4'></source>
                {/* <source src={Mockup1} type='video/webm'></source>
                Your browser is not supported */}
                </video>
            </div>
        </section>
    )
}
export default Video;