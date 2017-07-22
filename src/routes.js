import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import App from './App';

import Home from './views/home';
import About from './views/about';
import Resume from './views/resume';
import Portfolio from './views/portfolio';
import Contact from './views/contact';

import Page404 from './views/pages/404';

export default (
    <Route>
      <Route component={App} path='/'>
        <IndexRoute component={Home}/>
        <Route path='about' component={About}/>
        <Route path='resume' component={Resume}/>
        <Route path='portfolio' component={Portfolio}/>
        <Route path='contact' component={Contact}/>
      </Route>
      <Route path="404" component={Page404}/>
      <Redirect from="*" to="404"/>
    </Route>
);
