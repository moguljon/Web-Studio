import React, { Suspense, lazy } from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
// import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
// import Blog from './components/Blog/Blog';
import ScrollToTop from './components/ScrollToTop';
// import Work from './components/Work/Work';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'tachyons';
import {Helmet} from "react-helmet";
// import Moguljon from './components/Moguljon/moguljon';
import Nomatch from './components/Nomatch/Nomatch';
// import Home from './components/Home/Home';
// import Privacy from './components/Privacy/Privacy';
// import Prices from './components/Prices/Prices';
// import Terms from './components/Terms/Terms';
// import Cookies from './components/Cookies/Cookies';

const Home = lazy(() => import('./components/Home/Home'));
const Booking = lazy(() => import('./components/Booking/Booking'));
const Work = lazy(() => import('./components/Work/Work'));
const Blog = lazy(() =>import('./components/Blog/Blog'));
const Moguljon = lazy(() => import('./components/Moguljon/moguljon'));
const Privacy = lazy(() => import('./components/Privacy/Privacy'));
const Prices = lazy(() => import('./components/Prices/Prices'));
const Terms = lazy(() => import('./components/Terms/Terms'))
const Cookies = lazy(() => import('./components/Cookies/Cookies'));
// const Navigation = lazy(() => import('./components/Navigation/Navigation'));
// const Footer = lazy(() => import('./components/Footer/Footer'));


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
            <Switch>
              <Suspense fallback={<div>Loading....</div>}>
                <Route exact path='/' component={Home} />
                <Route exact path='/booking' component={Booking} />
                <Route exact path='/work' component={Work} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/portfolio' component={Moguljon} />
                <Route exact path='/privacy' component={Privacy} />
                <Route exact path='/prices' component={Prices} />
                <Route exact path='/terms' component={Terms} />
                <Route exact path='/cookies-policy' component={Cookies} />
                
              </Suspense>
              <Route component={Nomatch} />
            </Switch>
            {/* <Social /> */}
            <Footer />
          </Router>
        </div>
    );
  } 

export default App;
