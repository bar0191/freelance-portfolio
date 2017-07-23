import React, {Component} from 'react';
import Nav from './shared/nav';
import SiteHead from './shared/header';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Particles from 'react-particles-js';
import { particleConfig } from './particlejs-config.js';

//styles
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {navMini: false}
  }

  toggleNav = (e) => {
    e.preventDefault();
    this.setState({navMini: !this.state.navMini});
  };
  hideNav = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({navMini: false})
  };
  render() {
    let navMini = this.state.navMini;

    let partStyle = {
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: '-9999'
    }

    return (
      <div className="app-wrapper">
        <Nav mini={navMini} />
        <div className="content-container">
          <Particles
            height="100vh" width="100vw" style={partStyle}
            params={particleConfig}
          />
          <SiteHead toggleNav={this.toggleNav}/>
          {this.props.children}
        </div>
      </div>
    )
  }
}

