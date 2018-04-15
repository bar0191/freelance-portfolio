import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import App from './App';
import Home from './views/home';
import About from './views/about';
import Resume from './views/resume';
import Portfolio from './views/portfolio';
import Contact from './views/contact';
import Page404 from './views/pages/404';
import CodeBlue from './views/pages/projects/codeblue';
import LatherBy from './views/pages/projects/latherbynature';
import LevelTen from './views/pages/projects/levelten';
import ReactPM from './views/pages/projects/reactpm';
import OldFolio from './views/pages/projects/oldfolio';
import Pokedex from './views/pages/projects/pokedex';
import Intel from './views/pages/projects/intelwp';
import Denton from './views/pages/projects/denton311';

export default (
    <Route>
      <Route component={App} path='/'>
        <IndexRoute component={Home}/>
        <Route path='about' component={About}/>
        <Route path='resume' component={Resume}/>
        <Route path='portfolio' component={Portfolio}/>
        <Route path='contact' component={Contact}/>
        <Route path='projects/codeblue' component={CodeBlue}/>
        <Route path='projects/latherbynature' component={LatherBy}/>
        <Route path='projects/levelten' component={LevelTen}/>
        <Route path='projects/intelwp' component={Intel}/>
        <Route path='projects/reactpm' component={ReactPM}/>
        <Route path='projects/old-portfolio' component={OldFolio}/>
        <Route path='projects/pokedex' component={Pokedex}/>
        <Route path='projects/denton311' component={Denton}/>
      </Route>
      <Route path="404" component={Page404}/>
      <Redirect from="*" to="404"/>
    </Route>
);
