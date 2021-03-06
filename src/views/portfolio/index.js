import React from 'react';
import ScrollArea from 'react-scrollbar';
import Mason from '../components/masonry';

export default () => (
  <div className="page-container">
    <div className="sub-page">
      <section className="card-page">
        <ScrollArea className="scroll-container" horizontal={false} verticalScrollbarStyle={{width: '4px', marginLeft: '10px'}}>
        <div className="inner-container">
          <div className="border-block"/>
          <div className="card-title-section">
            <div className="card-title-wrap clearfix">
              <h1 className="title">Portfolio</h1>
              <h5 className="subtitle-section">The Beginning of Great Work</h5>
            </div>
          </div>
          <div className="row">
            <Mason/>
          </div>
        </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);