import React from 'react';
import IconMenu from 'react-icons/lib/md/menu';

import './style.scss';

export default (props) => (
  <header className="site-head">
    <div>
      <IconMenu className="menu-icon" size="24" color="#fff" onClick={props.toggleNav} style={{cursor: 'pointer'}}/>
    </div>
  </header>
);