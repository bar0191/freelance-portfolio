import React from 'react';
import IconMenu from 'react-icons/lib/md/menu';

import './style.scss';

export default (props) => (
  <header className="site-head">
    <div className="site-head-title">Brandon Reid</div>
    <IconMenu className="menu-icon" size="34" color="#00FF96" onClick={props.toggleNav} style={{cursor: 'pointer'}}/>
  </header>
);