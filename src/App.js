import React, {Component} from 'react';
import Nav from './shared/nav';
import SiteHead from './shared/header';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

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
  }
  hideNav = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({navMini: false})
  }
  render() {
    let navMini = this.state.navMini;
    return (
      <div className="app-wrapper">
        <Nav mini={navMini} />
        <div className="content-container ">
          <div className="menu-dropshadow" style={{display: (navMini ? 'block' : 'none')}} onClick={this.hideNav}/>
          <SiteHead toggleNav={this.toggleNav}/>
          {this.props.children}
        </div>
      </div>
    )
  }
}

