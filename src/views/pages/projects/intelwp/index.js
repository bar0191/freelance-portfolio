import React from 'react';
import ScrollArea from 'react-scrollbar';
import {Link} from 'react-router';
import Slider from 'react-slick';
import ExitIcon from 'react-icons/lib/ti/delete-outline';
import UserIcon from 'react-icons/lib/fa/user';
import GlobeIcon from 'react-icons/lib/fa/globe';
import CalIcon from 'react-icons/lib/fa/calendar';

import intelLandingPic from '../../../../images/intel-home.png';
import intelBlogPic from '../../../../images/intel-blog.png';
import intelFeatPic from '../../../../images/intel-features.png';

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
                <h1 className="title-project">IntelligenceWP</h1>
              </div>
            </div>
            <div className="row">
              <div className="pad-col-project">
                <div className="block-title"><h3>Description</h3></div>
                <ul className="project-info">
                  <li><p><UserIcon className="icon"/>Brandon Reid</p></li>
                  <li><p><GlobeIcon className="icon"/><a href="https://intelligencewp.com/">intelligencewp.com</a></p></li>
                  <li><p><CalIcon className="icon"/>Fall 2017</p></li>
                </ul>
                <p className="text-justify">Migration and Re-design of IntelligenceWP from Drupal to Wordpress. Migrated all content, and styled the site using the genesis wordpress framework.</p>
                <div className="tags-section">
                  <div className="block-title"><h3>Technology</h3></div>
                  <ul className="tags">
                    <li><a>Wordpress</a></li>
                    <li><a>PHP</a></li>
                    <li><a>Pantheon</a></li>
                    <li><a>HTML</a></li>
                    <li><a>SASS</a></li>
                    <li><a>Genesis</a></li>
                    <li><a>Redesign</a></li>
                  </ul>
                </div>
              </div>
              <div className="pad-col-project-slider">
                <Slider {...settings}>
                  <div><img style={imgStyle} src={intelLandingPic} alt=""/></div>
                  <div><img style={imgStyle} src={intelFeatPic} alt=""/></div>
                  <div><img style={imgStyle} src={intelBlogPic} alt=""/></div>
                </Slider>
              </div>
            </div>
          </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);