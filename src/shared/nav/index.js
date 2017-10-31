import React from 'react';
import {Link, IndexLink} from 'react-router';
import ScrollArea from 'react-scrollbar';

import IconUser from 'react-icons/lib/ti/user-outline';
import IconHome from 'react-icons/lib/ti/home-outline';
import IconCard from 'react-icons/lib/ti/business-card';
import IconCase from 'react-icons/lib/ti/briefcase';
import IconMail from 'react-icons/lib/ti/mail';

import MyPic from '../../images/my_photo.png';

import './style.scss';

const NavHead = () => (
  <header className="nav-head">
    <div className="my-photo">
      <img src={MyPic} width="75px" height="75px" role="presentation" />
    </div>
    <strong className="h1 nav-list-title">Brandon Reid</strong>
  </header>
);

class NavList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    }
  }

  render() {
    const NavStyle = {
      padding: '25px 0 30px'
    };
    return (
      <div style={NavStyle}>
        <ul className="nav-list">
          <li onClick={this.props.hideNav}>
            <IndexLink activeClassName="active" to="/"><IconHome className="icon"/><br/>Home</IndexLink>
          </li>
          <li onClick={this.props.hideNav}>
            <Link activeClassName="active" to="/about"><IconUser className="icon"/><br/>About Me</Link>
          </li>
          <li onClick={this.props.hideNav}>
            <Link activeClassName="active" to="/resume"><IconCard className="icon"/><br/>Resume</Link>
          </li>
          <li onClick={this.props.hideNav}>
            <Link activeClassName="active" to="/portfolio"><IconCase className="icon"/><br/>Portfolio</Link>
          </li>
          <li onClick={this.props.hideNav}>
            <Link activeClassName="active" to="/contact"><IconMail className="icon"/><br/>Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}


export default (props) => (
  <nav className={`site-nav ${props.mini ? 'mini' : ''}`} role="navigation">
    <ScrollArea
      className="nav-list-container"
      horizontal={false}
      verticalScrollbarStyle={{width: '4px', marginLeft: '10px'}}
    >
    <NavHead/>
    <NavList {...props}/>
    </ScrollArea>
  </nav>
);