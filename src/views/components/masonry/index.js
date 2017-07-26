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
        <article className="project">
        <Link to="/projects/old-portfolio">
          <img src={OldPort}/>
          <span className="meta">
            <span className="meta-inner">
              <h1>First React Site</h1>
              <p>My old portfolio site</p>
            </span>
          </span>
        </Link>
        </article>
        <article className="project">
          <Link to="/projects/codeblue">
            <img src={CodeBlue}/>
            <span className="meta">
            <span className="meta-inner">
              <h1>Presbyterian Hospital</h1>
              <p>Admin Panel</p>
            </span>
          </span>
          </Link>
        </article>
        <article className="project">
          <Link to="/projects/pokedex">
            <img src={Pokedex}/>
            <span className="meta">
            <span className="meta-inner">
              <h1>Level Ten Interactive</h1>
              <p>Advanced Drupal Site</p>
            </span>
          </span>
          </Link>
        </article>
      </Masonry>
    );
  }
});

module.exports = Gallery;