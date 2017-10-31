import React from 'react';
import ScrollArea from 'react-scrollbar';
import {Link} from 'react-router';
import Slider from 'react-slick';
import ExitIcon from 'react-icons/lib/ti/delete-outline';
import UserIcon from 'react-icons/lib/fa/user';
import GlobeIcon from 'react-icons/lib/fa/globe';
import CalIcon from 'react-icons/lib/fa/calendar';

import l10LandingPic from '../../../../images/l10_landing.png';
import l10WwdPic from '../../../../images/l10_wwd.png';
import l10AgilePic from '../../../../images/l10Agile.png';

const settings = {
  dots: true
};

const imgStyle = {
  height: '25%',
  width: '100%'
};


export default () => (
  <div className="page-container">
    <div className="sub-page">
      <section className="card-page">
        <ScrollArea className="scroll-container" horizontal={false} verticalScrollbarStyle={{width: '4px', marginLeft: '10px'}}>
          <div className="page-exit">
            <Link to="/portfolio">
              <ExitIcon size='32'/>
            </Link>
          </div>
          <div className="inner-container">
            <div className="card-title-section">
              <div className="card-title-wrap clearfix">
                <h1 className="title-project">LevelTen Interactive</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7 col-md-7 pad-col-project">
                <div className="col-sm-7 col-md-7 pad-col-project-slider">
                  <Slider {...settings}>
                    <div><img style={imgStyle} src={l10LandingPic} role="presentation"/></div>
                    <div><img style={imgStyle} src={l10WwdPic} role="presentation"/></div>
                    <div><img style={imgStyle} src={l10AgilePic} role="presentation"/></div>
                  </Slider>
                </div>
              </div>
              <div className="col-sm-5 col-md-5 pad-col-project">
                <div className="block-title"><h3>Description</h3></div>
                <ul className="project-info">
                  <li><p><UserIcon className="icon"/>Brandon Reid</p></li>
                  <li><p><GlobeIcon className="icon"/><a href="https://getlevelten.com/">getlevelten.com</a></p></li>
                  <li><p><CalIcon className="icon"/>Fall 2017</p></li>
                </ul>
                <p className="text-justify">Upon being hired with LevelTen I was required to redesign their agency website, and convert bootstrap 2 markup to bootstrap 3.</p>
                <div className="tags-section">
                  <div className="block-title"><h3>Technology</h3></div>
                  <ul className="tags">
                    <li><a>Drupal</a></li>
                    <li><a>PHP</a></li>
                    <li><a>Pantheon</a></li>
                    <li><a>HTML</a></li>
                    <li><a>CSS</a></li>
                    <li><a>Bootstrap 3</a></li>
                    <li><a>Redesign</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);