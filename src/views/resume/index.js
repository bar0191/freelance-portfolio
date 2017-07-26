import React from 'react';
import ScrollArea from 'react-scrollbar';

import './style.scss';

const colStyle = {
  marginTop: '25px'
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
        </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);