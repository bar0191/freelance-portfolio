import React from 'react';
import ScrollArea from 'react-scrollbar';
import './style.scss';
import MyPhoto from '../../images/my_photo.png';
import GitHubIcon from 'react-icons/lib/ti/social-github';
import LinkedInIcon from 'react-icons/lib/ti/social-linkedin';
import MailIcon from 'react-icons/lib/ti/mail';

import CloudImg from '../../images/cloud.png';
import WhiteHatImg from '../../images/whitehat.png';
import PhoneImg from '../../images/phone.png';
import CodeImg from '../../images/code.png';

const serviceStyle = {
  textAlign: 'center'
};

const serviceImgStyle = {
  maxWidth: '100px',
  maxHeight: '75px',
  margin: '0px 0px 10px'
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
              <h1 className="title">About Me</h1>
              <h5 className="subtitle-section">Code Monkey, Copy Cat, Doer</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 pad-col">
              <div className="my-photo-block">
                <img className="img-responsive" src={MyPhoto}/>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <h3>A Student, Researcher, and Freelancer</h3>
              <p>I'm currently pursuing a bachelors degree in Information Technology with a security concentration at the University of North Texas, and I'm going on my senior year. My interests are in full stack development, cyber security, and drone technology. I've lived in the DFW area all of my life, and grew up absorbed in technology. My father introduced me to an apple II at the age of 3, and he swears I was hooked ever since.</p>
              <p>I've always had a passion for technology, and consider myself as a generalist and a futurist. In my free time, I enjoys attending hackathons, working on react.js projects, and have recently started building my first racing drone. As a generalist, I enjoys using my keen learning abilities, and my vigorous work ethic to achieve any task or accomplish any goal.</p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 pad-col">
              <ul className="personal-info">
                <li>
                  <span className="info-title">Age</span>
                  <span className="info-data">23</span>
                </li>
                <li>
                  <span className="info-title">Residence</span>
                  <span className="info-data">Dallas, Texas</span>
                </li>
                <li>
                  <span className="info-title">e-mail</span>
                  <span className="info-data"><a href="mailto:brandonreid2@my.unt.edu">brandonreid2@my.unt.edu</a></span>
                </li>
                <li>
                  <span className="info-title">Phone</span>
                  <span className="info-data">(469) 628-2005</span>
                </li>
                <li>
                  <span className="info-title">Freelance</span>
                  <span className="info-data">Available</span>
                </li>
              </ul>
              <ul className="social-buttons">
                <li><a href="https://github.com/bar0191"><GitHubIcon size="33"/></a></li>
                <li><a href="https://linkedin.com/in/brandon-reid"><LinkedInIcon size="32"/></a></li>
                <li><a href="mailto:brandonreid2@my.unt.edu"><MailIcon size="32"/></a></li>
              </ul>
            </div>
          </div>
          <div className="block-title">
            <h3>Services</h3>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={CloudImg} style={serviceImgStyle}/>
                <h4>Cloud Hosting</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={PhoneImg} style={serviceImgStyle}/>
                <h4>Mobile Integration</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={WhiteHatImg} style={serviceImgStyle}/>
                <h4>Security First</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={CodeImg} style={serviceImgStyle}/>
                <h4>Web Applications</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>
        </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);