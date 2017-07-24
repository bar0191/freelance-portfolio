import React from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router';

import LatherBy from '../../../images/latherby-sm.png';
import OldPort from '../../../images/oldfolio-sm.png';
import CodeBlue from '../../../images/codeblue-sm.png';
import Pokedex from '../../../images/pokedex-main-sm.png';


import './style.scss';

let masonryOptions = {
  transitionDuration: 0
};


let imgStyle = {
  padding: '25px'
};

const Gallery = React.createClass({
  render: function () {
    return (
      <Masonry
        className={'my-gallery-class mason'}
      >
        {/*<Link to="/projects/latherbynature"><img style={imgStyle} src={LatherBy}/></Link>*/}
        <Link to="/projects/old-portfolio"><img style={imgStyle} src={OldPort}/></Link>
        <Link to="/projects/codeblue"><img style={imgStyle} src={CodeBlue}/></Link>
        <Link to="/projects/pokedex"><img style={imgStyle} src={Pokedex}/></Link>
      </Masonry>
    );
  }
});

module.exports = Gallery;