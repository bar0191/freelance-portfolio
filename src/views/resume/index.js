import React from 'react';
import ScrollArea from 'react-scrollbar';
import Slider from 'react-slick';

import './style.scss';

import CouchPic from '../../images/couchbase.png';
import SassPic from '../../images/sass.svg';
import ReactPic from '../../images/react.png';
import DrupalPic from '../../images/drupal.png';
import CssPic from '../../images/Css3.png';
import HtmlPic from '../../images/HTML5_Badge.png';
import DoPic from '../../images/Digitalocean.png';
import ExpressPic from '../../images/expressjs.png';
import GitPic from '../../images/Git-Icon.png';
import NodePic from '../../images/nodejs_logo.png';
import WordPressPic from '../../images/wordpress.png';
import JsPic from '../../images/logo_javascript.png';
import BootStrapPic from '../../images/logo-bootstrap-4.png';
import CPlusPic from '../../images/c-logo.png';
import BashPic from '../../images/App-Terminal.png';
import AndroidPic from '../../images/android.png';
import FirebasePic from '../../images/firebase.png';


const colStyle = {
  marginTop: '25px'
};

const serviceStyle = {
  textAlign: 'center'
};

const serviceImgStyle = {
  maxWidth: '100px',
  maxHeight: '75px',
  margin: 'auto'
};

const headingStyle = {
  marginTop: '15px'
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 3000,
  initialSlide: 0,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2,
      infinite: true
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true
    }
  }]
};

const slideStyle = {
  marginTop: '50px',
  marginBottom: '50px'
};

const slideDescStyle = {
  color: '#f3f3f3',
  paddingTop: '10px',
  display: 'block',
  textAlign: 'center'
};

export default () => (
  <div className="page-container">
    <div className="sub-page">
      <section className="card-page">
        <ScrollArea className="scroll-container" horizontal={false} verticalScrollbarStyle={{width: '4px', marginLeft: '10px'}}>
        <div className="inner-container">
          <div className="border-block"/>
          <div className="card-title-section">
            <div className="card-title-wrap clearfix">
              <h1 className="title">Resume</h1>
              <h5 className="subtitle-section">2 Years Experience</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="download-button">
                <a href="https://drive.google.com/file/d/0B1uaZFI6UYNVVE4tWlUtTjdnU1U/view" className="button">
                  Download
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6" style={colStyle}>
              <div className="block-title">
                <h3>Education</h3>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <h4 className="timeline-item-title">University of North Texas</h4>
                  <span className="timeline-item-period">2014 - Current</span>
                  <span className="timeline-item-name">Information Technology - BA</span>
                  <span className="timeline-item-desc">
                    <ul>
                      <li>Federal Security certificate administered by the NSA</li>
                      <li>Member of Cyber Security Association - 2 years</li>
                      <li>Undergraduate research assistant with Computer Science Dept.</li>
                      <li>President's List both Spring and Fall Semesters in 2017</li>
                      <li>Worked with City of Denton to create 311 mobile application</li>
                    </ul>
                  </span>
                </div>
                <div className="timeline-item">
                  <h4 className="timeline-item-title">North Central Texas College</h4>
                  <span className="timeline-item-period">2012 - 2014</span>
                  <span className="timeline-item-name">Basics</span>
                  <span className="timeline-item-desc">
                    <ul>
                      <li>Dean's list Spring/Fall 2013</li>
                      <li>Intro to Java Programming done here</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6" style={colStyle}>
              <div className="block-title">
                <h3>Experience</h3>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <h4 className="timeline-item-title">Junior Drupal Developer</h4>
                  <span className="timeline-item-period">Aug 2017 - Feb 2018</span>
                  <span className="timeline-item-name">LevelTen Interactive</span>
                  <span className="timeline-item-desc">
                    <ul>
                      <li>PHP/Apache/MySQL</li>
                      <li>Remote contract development</li>
                      <li>Module management/development/debugging</li>
                      <li>Agile development environment</li>
                      <li>CoDev on company software</li>
                      <li>Redesigned agency website, convert from bootstrap 2 to 3</li>
                    </ul>
                  </span>
                </div>
                <div className="timeline-item">
                  <h4 className="timeline-item-title">Drupal Developer Intern</h4>
                  <span className="timeline-item-period">June 2017 - Aug 2017</span>
                  <span className="timeline-item-name">LevelTen Interactive</span>
                  <span className="timeline-item-desc">
                    <ul>
                      <li>PHP/Apache/MySQL</li>
                      <li>Module management, development, and debugging</li>
                      <li>Worked in an agile development environment</li>
                      <li>Managed issue queues, and preformed bug fixes</li>
                      <li>Created style guides, and re-styled/themed sites</li>
                    </ul>
                  </span>
                </div>
                <div className="timeline-item">
                  <h4 className="timeline-item-title">Research Assistant</h4>
                  <span className="timeline-item-period">Jan 2017 - June 2017</span>
                  <span className="timeline-item-name">University of North Texas</span>
                  <span className="timeline-item-desc">
                    <ul>
                      <li>Technology - Android, Git, Node.js, React.js, Couchbase, DigitalOcean</li>
                      <li>Practices - Waterfall methods, but have been transitioning to more agile methods</li>
                      <li>Developed real world applications - Next Generation medical services technology (CPR Monitor)</li>
                      <li>Developed full stack web application - admin panel for monitoring data analytics and statistics</li>
                      <li>Obtained the skills necessary to work in a team oriented environment, at a fast pace</li>
                      <li>Worked independently, and under minimal supervision</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="block-title" style={colStyle}>
            <h3>Skills</h3>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={CouchPic} style={serviceImgStyle} alt=""/>
                <h4 style={headingStyle}>Modern Back End Development</h4>
                <p>I have experience with modern NoSQL Databases such as MongoDB and Couchbase, as well as SQL databases such as MySQL and MariaDB.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={ReactPic} style={serviceImgStyle} alt=""/>
                <h4 style={headingStyle}>React Framework</h4>
                <p>My specialization is in the React Framework, ES6 Javascript, and NodeJS. Using expressJS for most of the backend work. After working with react for over a year now, it is safe to say I have grown a passion for using it.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={DrupalPic} style={serviceImgStyle} alt=""/>
                <h4 style={headingStyle}>CMS</h4>
                <p>For more content and SEO focused sites I use Drupal to quickly and efficiently bring a project to life. I have extensive training and experience with Drupal, building custom modules and themes to cater a client needs. </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={SassPic} style={serviceImgStyle} alt=""/>
                <h4 style={headingStyle}>Modern Front End Development</h4>
                <p>Utilising SASS, Bootstrap, grunt, bower etc is part of my standard workflow, and I'm happy working within a GIT, SVN environment.</p>
              </div>
            </div>
          </div>
          <div className="block-title" style={colStyle}>
            <h3>Technology Summary</h3>
          </div>
          <div style={slideStyle}>
            <Slider {...settings}>
              <div style={serviceStyle}>
                <img src={DoPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Digital Ocean</span>
              </div>
              <div style={serviceStyle}>
                <img src={BashPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Shell</span>
              </div>
              <div style={serviceStyle}>
                <img src={WordPressPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Wordpress</span>
              </div>
              <div style={serviceStyle}>
                <img src={NodePic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>NodeJS</span>
              </div>
              <div style={serviceStyle}>
                <img src={BootStrapPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Bootstrap</span>
              </div>
              <div style={serviceStyle}>
                <img src={CssPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>CSS3</span>
              </div>
              <div style={serviceStyle}>
                <img src={HtmlPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>HTML5</span>
              </div>
              <div style={serviceStyle}>
                <img src={JsPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Javascript</span>
              </div>
              <div style={serviceStyle}>
                <img src={CPlusPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>C++</span>
              </div>
              <div style={serviceStyle}>
                <img src={GitPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Git</span>
              </div>
              <div style={serviceStyle}>
                <img src={SassPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Sass/Scss</span>
              </div>
              <div style={serviceStyle}>
                <img src={DrupalPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Drupal</span>
              </div>
              <div style={serviceStyle}>
                <img src={FirebasePic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Firebase</span>
              </div>
              <div style={serviceStyle}>
                <img src={ReactPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>ReactJS</span>
              </div>
              <div style={serviceStyle}>
                <img src={CouchPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Couchbase</span>
              </div>
              <div style={serviceStyle}>
                <img src={AndroidPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>Android</span>
              </div>
              <div style={serviceStyle}>
                <img src={ExpressPic} style={serviceImgStyle} alt=""/>
                <span style={slideDescStyle}>ExpressJS</span>
              </div>
            </Slider>
          </div>
        </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);