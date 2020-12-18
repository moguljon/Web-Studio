import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import About from './components/About/About';
import Feature from './components/Feature/Feature';
import Prices from './components/Prices/Prices';
import Story from './components/Story/Story';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import ScrollToTop from './components/ScrollToTop';
import Work from './components/Work/Work';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'tachyons';
import Newsletter from './components/Newsletter/Newsletter';
import Social from  './components/Social/Social';
import {Helmet} from "react-helmet";
import Endrose from './components/Endorse/Endorse';
import Moguljon from './components/Moguljon/moguljon';


function App() {
    return (
        <div>
        <Helmet>
          <title>Web Studios | Let Us Create Your Next Website.</title>
          <meta name="description" content='We create stunning web apps for business owners large or small that need a wow factors to attract potential clients.' />
        </Helmet>
        <Router>
        <ScrollToTop />
        <Navigation />
          <Route exact path='/' component={Header} /> 
          <Route exact path='/' component={Endrose} /> 
          <Route exact path='/' component={About} />
          <Route exact path='/' component={Feature} />
          <Route exact path='/' component={Prices} />
          <Route exact path='/' component={Story} />
          <Route exact path='/' component={Work} /> 
          <Route exact path='/newsletter' component={Newsletter} />  
          <Route exact path='/booking' component={Booking} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/portfolio' component={Moguljon} />
          <Social />
          <Footer />
        </Router>
        </div>
    );
  } 

export default App;
