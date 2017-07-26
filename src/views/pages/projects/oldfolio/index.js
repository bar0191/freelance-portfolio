import React from 'react';
import ScrollArea from 'react-scrollbar';
import {Link} from 'react-router';
import ExitIcon from 'react-icons/lib/ti/delete-outline';
import UserIcon from 'react-icons/lib/fa/user';
import GlobeIcon from 'react-icons/lib/fa/globe';
import CalIcon from 'react-icons/lib/fa/calendar';
import OldPort from '../../../../images/oldfolio.png';

const imgStyle = {
  maxWidth: '180%'
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
                <h1 className="title-project">First Portfolio</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7 col-md-7 pad-col-project">
                <div className="col-sm-7 col-md-7 pad-col-project">
                  <div className="my-photo-block">
                    <img className="img-responsive" style={imgStyle} src={OldPort} role="presentation"/>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 col-md-5 pad-col-project">
                <div className="block-title"><h3>Description</h3></div>
                <ul className="project-info">
                  <li><p><UserIcon className="icon"/>Brandon Reid</p></li>
                  <li><p><GlobeIcon className="icon"/><a href="http://portal.cprlifeguard.com/">portal.cprlifeguard.com</a></p></li>
                  <li><p><CalIcon className="icon"/>Spring 2017</p></li>
                </ul>
                <p className="text-justify">This project was my first portfolio site, along with my first production ReactJS site. This project uses purely reactJS and Bootstrap, hosted on github pages.</p>
                <div className="tags-section">
                  <div className="block-title"><h3>Technology</h3></div>
                  <ul className="tags">
                    <li><a>React</a></li>
                    <li><a>Javascript</a></li>
                    <li><a>CSS3</a></li>
                    <li><a>HTML5</a></li>
                    <li><a>GitPages</a></li>
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