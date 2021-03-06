import React from 'react';
import ScrollArea from 'react-scrollbar';
import {Link} from 'react-router';
import ExitIcon from 'react-icons/lib/ti/delete-outline';
import UserIcon from 'react-icons/lib/fa/user';
import GlobeIcon from 'react-icons/lib/fa/globe';
import CalIcon from 'react-icons/lib/fa/calendar';
import LatherBy from '../../../../images/latherby.png';

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
                <h1 className="title-project">Lather By Nature</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7 col-md-7 pad-col-project-slider">
                <img className="img-responsive" src={LatherBy} alt=""/>
              </div>
              <div className="col-sm-5 col-md-5 pad-col-project">
                <div className="block-title"><h3>Description</h3></div>
                <ul className="project-info">
                  <li><p><UserIcon className="icon"/>Brandon Reid</p></li>
                  <li><p><GlobeIcon className="icon"/><a href="http://latherbynature.com/">latherbynature.com</a></p></li>
                  <li><p><CalIcon className="icon"/>Spring 2017</p></li>
                </ul>
                <p className="text-justify">This was my first freelancing project for a client who sold body essentials such as soap. This site was powered by Wordpress and Woocommerce. This site was also done in conjunction with a school project. The site is currently down for maintenance due to plugins no longer being supported by the theme provider. I am re-working a new commerce site in react.</p>
                <div className="tags-section">
                  <div className="block-title"><h3>Technology</h3></div>
                  <ul className="tags">
                    <li><a>React</a></li>
                    <li><a>Javascript</a></li>
                    <li><a>CSS3</a></li>
                    <li><a>HTML</a></li>
                    <li><a>NoSQL</a></li>
                    <li><a>NodeJS</a></li>
                    <li><a>ExpressJS</a></li>
                    <li><a>Digital Ocean</a></li>
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