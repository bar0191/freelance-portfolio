import React from 'react';
import ScrollArea from 'react-scrollbar';

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
        </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);