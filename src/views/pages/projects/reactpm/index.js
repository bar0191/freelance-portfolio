import React from 'react';
import ScrollArea from 'react-scrollbar';
import {Link} from 'react-router';
import Slider from 'react-slick';
import ExitIcon from 'react-icons/lib/ti/delete-outline';
import UserIcon from 'react-icons/lib/fa/user';
import GlobeIcon from 'react-icons/lib/fa/globe';
import CalIcon from 'react-icons/lib/fa/calendar';

import rpmLandingPic from '../../../../images/rpm_landing.png';
import rpmVaultPic from '../../../../images/rpm_vault.png';
import rpmToolsPic from '../../../../images/rpm_tools.png';
import rpmGenPic from '../../../../images/rpm_gen.png';
import rpmAuthPic from '../../../../images/rpm_auth.png';

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
                <h1 className="title-project">ReactPM</h1>
              </div>
            </div>
            <div className="row">
              <div className="pad-col-project">
                <div className="block-title"><h3>Description</h3></div>
                <ul className="project-info">
                  <li><p><UserIcon className="icon"/>Brandon Reid</p></li>
                  <li><p><GlobeIcon className="icon"/>Site currently down</p></li>
                  <li><p><CalIcon className="icon"/>Fall 2017</p></li>
                </ul>
                <p className="text-justify">Simple Password Manager built purely on React. The purpose of this project is to provide the React community with examples of how to authenticate users and APIs using Auth0, use javascript encryption standards, implement Google’s Material UI, and create backend APIs to work with a Couchbase database.</p>
                <div className="tags-section">
                  <div className="block-title"><h3>Technology</h3></div>
                  <ul className="tags">
                    <li><a>React</a></li>
                    <li><a>Javascript</a></li>
                    <li><a>Express</a></li>
                    <li><a>NodeJS</a></li>
                    <li><a>Couchbase</a></li>
                    <li><a>MaterialUI</a></li>
                    <li><a>Auth0</a></li>
                    <li><a>Security</a></li>
                  </ul>
                </div>
              </div>
              <div className="pad-col-project-slider">
                <Slider {...settings}>
                  <div><img style={imgStyle} src={rpmLandingPic} alt=""/></div>
                  <div><img style={imgStyle} src={rpmToolsPic} alt=""/></div>
                  <div><img style={imgStyle} src={rpmVaultPic} alt=""/></div>
                  <div><img style={imgStyle} src={rpmGenPic} alt=""/></div>
                  <div><img style={imgStyle} src={rpmAuthPic} alt=""/></div>
                </Slider>
              </div>
            </div>
          </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);