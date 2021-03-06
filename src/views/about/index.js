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
              <h5 className="subtitle-section">Code Monkey</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 pad-col">
              <div className="my-photo-block">
                <img className="img-responsive" src={MyPhoto} alt=""/>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <h3>A Student, Researcher, and Freelancer</h3>
              <p>I've always had a passion for technology, and consider myself as a generalist and a futurist. In my free time, I enjoys attending hackathons, working on react.js projects, and have recently started building my first racing drone. As a generalist, I enjoys using my keen learning abilities, and my vigorous work ethic to achieve any task or accomplish any goal.</p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 pad-col">
              <ul className="personal-info">
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
                <img src={CloudImg} style={serviceImgStyle} alt=""/>
                <h4>Cloud Hosting</h4>
                <p>I've worked with some of the best cloud hosting platforms, such as Digital Ocean and Pantheon.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={PhoneImg} style={serviceImgStyle} alt=""/>
                <h4>Mobile Design</h4>
                <p>Now that 60% of web traffic is mobile, it is crucial to design with mobile in mind first.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={WhiteHatImg} style={serviceImgStyle} alt=""/>
                <h4>Security Conscious</h4>
                <p>With my educational background came a concentration in Cyber Security, and I provide a security conscious service to my clients.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 pad-col">
              <div style={serviceStyle}>
                <img src={CodeImg} style={serviceImgStyle} alt=""/>
                <h4>Web Apps</h4>
                <p>Working with cutting-edge and trending web application frameworks such as ReactJS, NodeJS, Express and NoSQL. </p>
              </div>
            </div>
          </div>
        </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);