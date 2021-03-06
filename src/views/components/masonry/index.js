import React from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router';
// import LatherBy from '../../../images/latherby-sm.png';
import OldPort from '../../../images/oldfolio-sm.png';
import CodeBlue from '../../../images/codeblue-sm.png';
import Pokedex from '../../../images/pokedex-main-sm.png';
import LevelTen from '../../../images/l10_landing.png';
import ReactPM from '../../../images/rpm_landing.png';
import Intel from '../../../images/intel-home.png';
import Denton311 from '../../../images/denton311.png';


import './style.scss';


class Gallery extends React.Component {
  render() {
    return (
      <Masonry
        className={'my-gallery-class mason'}
      >
        {/*<Link to="/projects/latherbynature"><img style={imgStyle} src={LatherBy}/></Link>*/}
        <article className="project">
          <Link to="/projects/intelwp">
            <img src={Intel} alt=""/>
            <span className="meta">
            <span className="meta-inner">
              <h1>IntelligenceWP</h1>
              <p>Redesign/migration </p>
            </span>
          </span>
          </Link>
        </article>
        <article className="project">
          <Link to="/projects/reactpm">
            <img src={ReactPM} alt=""/>
            <span className="meta">
            <span className="meta-inner">
              <h1>ReactPM</h1>
              <p>React Password Manager </p>
            </span>
          </span>
          </Link>
        </article>
        <article className="project">
          <Link to="/projects/levelten">
            <img src={LevelTen} alt=""/>
            <span className="meta">
            <span className="meta-inner">
              <h1>LevelTen Site</h1>
              <p>Redesign agency website </p>
            </span>
          </span>
          </Link>
        </article>
        <article className="project">
          <Link to="/projects/old-portfolio">
            <img src={OldPort} alt=""/>
            <span className="meta">
            <span className="meta-inner">
              <h1>First React Site</h1>
              <p>My old portfolio site</p>
            </span>
          </span>
          </Link>
        </article>
        <article className="project">
          <Link to="/projects/denton311">
            <img src={Denton311} alt=""/>
            <span className="meta">
            <span className="meta-inner">
              <h1>City of Denton</h1>
              <p>Mobile 311 Application</p>
            </span>
          </span>
          </Link>
        </article>
        <article className="project">
          <Link to="/projects/codeblue">
            <img src={CodeBlue} alt=""/>
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
            <img src={Pokedex} alt=""/>
            <span className="meta">
            <span className="meta-inner">
              <h1>Level Ten Interactive</h1>
              <p>Advanced Drupal Site</p>
            </span>
          </span>
          </Link>
        </article>
      </Masonry>
    )
  }
}

export default Gallery;