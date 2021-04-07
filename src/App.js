import React, { lazy } from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
// import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'tachyons';
import {Helmet} from "react-helmet";
// import Moguljon from './components/Moguljon/moguljon';
import Nomatch from './components/Nomatch/Nomatch';
// import Home from './components/Home/Home';
import Privacy from './components/Privacy/Privacy';
// import Prices from './components/Prices/Prices';
import Terms from './components/Terms/Terms';
import Cookies from './components/Cookies/Cookies';
// import Resources from './components/Resources/Resources';
import Bottom from './components/Bottom/Bottom';
import { Suspense } from 'react';

const Home = lazy(() => import('./components/Home/Home'));
const Resources = lazy(() => import('./components/Resources/Resources'));
const renderLoader = () => <p>Loading..</p>
const Moguljon = lazy(() => import('./components/Moguljon/moguljon'));
const Prices = lazy(() => import('./components/Prices/Prices'));
const Booking = lazy(() => import('./components/Booking/Booking'));

function App() {
    return (
        <div>
          <Helmet>
            <meta property="og:title" content="Welcome to Web Studios" data-rh="true" />
            <meta property="og:description" content="We leverage technology to create brands from inception to production because we understand that it is much easier to have a guiding hand that understands the technical details of creating a brand." data-rh="true" />
            <meta property="og:image" content="https://www.webstudios.io/static/media/resources.a660f562.svg" data-rh="true" />
            <title>Web Studios | Let's Build Your Business</title> 
            <meta name="description" content='We leverage technology to create brands from inception to production because we understand that it is much easier to have a guiding hand that understands the technical details of creating a brand.' /> */}
          </Helmet>
        <Router>
          <ScrollToTop />
          <Navigation />  
          <Suspense fallback={renderLoader()}>  
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
          </Suspense>      
          <Bottom />
          <Footer />
        </Router>
      </div> 
    )
  } 

export default App;
