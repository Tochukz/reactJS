import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

//import App from './App';
import Home from './pages/home';
import About from './pages/about/';
import Events from './pages/events';
import Products from './pages/products';
import Contact from './pages/contact';
import User from './pages/user';

import Whoops404 from './pages/whoops404';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter>
      <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Redirect from="/history" to="/about/history" />
            <Redirect from="/services" to="/about/services" />
            <Redirect from="/location" to="/about/location" />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route path="/user/:name/:gender/:city" component={User}/>
            <Route component={Whoops404} />
          </Switch>
      </div>
    </HashRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
