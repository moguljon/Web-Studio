import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'tachyons';
import {Helmet} from "react-helmet";
import Moguljon from './components/Moguljon/moguljon';
import Nomatch from './components/Nomatch/Nomatch';
import Home from './components/Home/Home';
import Privacy from './components/Privacy/Privacy';
import Prices from './components/Prices/Prices';
import Terms from './components/Terms/Terms';
import Cookies from './components/Cookies/Cookies';
import Resources from './components/Resources/Resources';
import Bottom from './components/Bottom/Bottom';

function App() {
    return (
        <div>
        <Helmet>
          <title>Web Studios | Let's Build Your Brand</title>
          <meta name="description" content='We leverage technology to create brands from inception to production because we understand that it is much easier to have a guiding hand that understands the technical details of creating a brand.' />
          <link rel="canonical" href="https://www.webstudios.io/"></link>>
          <meta property="og:title" content=" app .js A Step-by-Step Guide to Setting Up Selenium-webdriver with Node.js" data-rh="true" />
          <meta property="og:description" content=" app .js A dummies guide to getting up and running with selenium-webdriver" data-rh="true" />
          <meta property="og:image" content="https://www.webstudios.io/static/media/resources.a660f562.svg" data-rh="true" />
        </Helmet>
        <Router>
          <ScrollToTop />
          <Navigation />  
          <Switch>             
              <Route exact path='/' component={Home} />
              <Route exact path='/booking' component={Booking} />
              <Route exact path='/portfolio' component={Moguljon} />
              <Route exact path='/privacy' component={Privacy} />
              <Route exact path='/Services' component={Prices} />
              <Route exact path='/terms' component={Terms} />
              <Route exact path='/cookies-policy' component={Cookies} />
              <Route exact path='/resources' component={Resources} />
              <Route component={Nomatch} />
          </Switch>
          <Bottom />
          <Footer />
        </Router>
      </div> 
    )
  } 

export default App;
