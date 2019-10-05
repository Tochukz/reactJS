import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

//import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Events from './pages/events';
import Products from './pages/products';
import Contact from './pages/contact';
import Whoops404 from './pages/whoops404';
import CompanyNavigation from './components/company-navigation';

import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter>
      <CompanyNavigation />
      <div className="main" style={{width: '1080px', margin: '10px auto'}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route component={Whoops404} />
          </Switch>
      </div>
    </HashRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
