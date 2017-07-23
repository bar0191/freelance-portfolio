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

const NavHead = (props) => (
  <header className="nav-head">
    <div className="my-photo">
      <img src={MyPic} width="75px" height="75px" alt="image" />
    </div>
    <strong className="h1 nav-list-title">Brandon Reid</strong>
  </header>
);

class NavList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
  }
  handleClick = (index, e) => {
    let c = e.currentTarget.className;
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      selected: (c.indexOf('selected') >= 0) ? '' : index
    })
  }
  handleOpen = (index, e) => {
    e.stopPropagation();
    this.setState({
      selected: index
    })
  }

  render() {
    return (
      <ScrollArea className="nav-list-container" horizontal={false} verticalScrollbarStyle={{width: '4px', marginLeft: '10px'}}>
      <div>
        <ul className="nav-list">
          <li><Link to="/"><IconHome className="icon"/><br/>Home</Link></li>
          <li><Link to="/about"><IconUser className="icon"/><br/>About Me</Link></li>
          <li><Link to="/resume"><IconCard className="icon"/><br/>Resume</Link></li>
          <li><Link to="/portfolio"><IconCase className="icon"/><br/>Portfolio</Link></li>
          <li><Link to="/contact"><IconMail className="icon"/><br/>Contact</Link></li>
        </ul>
      </div>
      {/* end scroll-area */}
    </ScrollArea>
    )
  }
}


export default (props) => (
  <nav className={`site-nav ${props.mini ? 'mini' : ''}`} role="navigation">
    <NavHead {...props}/>
    <NavList {...props}/>
  </nav>
);