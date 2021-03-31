import React from 'react';
import Header from '../Header/Header';
import Endrose from '../Endorse/Endorse';
import About from '../About/About';
import Feature from '../Feature/Feature';
import Story from '../Story/Story';
import Work from '../Work/Work';

const Home = () => {
    return(
        <div>
            <Header />
            <Endrose />
            <About />
            <Feature />
            <Story />
            <Work />
        </div>
    )
}

export default Home;