import React from 'react';
import ScrollArea from 'react-scrollbar';
import {Link} from 'react-router';
import ExitIcon from 'react-icons/lib/ti/delete-outline';
import UserIcon from 'react-icons/lib/fa/user';
import GlobeIcon from 'react-icons/lib/fa/globe';
import CalIcon from 'react-icons/lib/fa/calendar';
import DentonPic from '../../../../images/denton311.png';

const imgStyle = {
  maxWidth: '100%'
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
                <h1 className="title-project">Denton 311 Mobile App</h1>
              </div>
            </div>
            <div className="row">
              <div className="pad-col-project">
                <div className="block-title"><h3>Description</h3></div>
                <ul className="project-info">
                  <li><p><UserIcon className="icon"/>Brandon Reid</p></li>
                  <li><p><GlobeIcon className="icon"/><a href="https://denton311-portal.herokuapp.com/">denton311-portal.herokuapp.com</a></p></li>
                  <li><p><CalIcon className="icon"/>Fall 2017 - Spring 2018</p></li>
                </ul>
                <p className="text-justify">This was a senior design project done in conjunction with the City of Denton, University of North Texas, and The Open Denton Project. Denton 311 was an initiative made by the my team and the university to provide the city with a reporting system for non-emergency situations. (currently still in development) </p>
                <div className="tags-section">
                  <div className="block-title"><h3>Technology</h3></div>
                  <ul className="tags">
                    <li><a>React</a></li>
                    <li><a>React Native</a></li>
                    <li><a>Expo</a></li>
                    <li><a>Javascript</a></li>
                    <li><a>CSS3</a></li>
                    <li><a>HTML5</a></li>
                    <li><a>Heroku</a></li>
                  </ul>
                </div>
              </div>
              <div className="pad-col-project">
                <div className="my-photo-block">
                  <img className="img-responsive" style={imgStyle} src={DentonPic} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);