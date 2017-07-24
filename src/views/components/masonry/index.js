import React from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router';

import CloudImg from '../../../images/cloud.png';
import WhiteHatImg from '../../../images/whitehat.png';
import PhoneImg from '../../../images/phone.png';
import CodeImg from '../../../images/code.png';

let masonryOptions = {
  transitionDuration: 0
};

let style = {
  backgroundColor: 'tomato'
};

let imgStyle = {
  padding: '25px'
};

const Gallery = React.createClass({
  render: function () {
    return (
      <Masonry
        className={'my-gallery-class'}
        style={style}
      >
        <Link to="/"><img style={imgStyle} src={CloudImg}/></Link>
        <img style={imgStyle} src={CloudImg}/>
        <img style={imgStyle} src={CloudImg}/>
        <img style={imgStyle} src={CloudImg}/>
      </Masonry>
    );
  }
});

module.exports = Gallery;