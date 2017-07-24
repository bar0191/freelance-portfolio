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
              <h1 className="title">Contact</h1>
              <h5 className="subtitle-section">Lets Get to Work!</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 pad-col">
              <div className="block-title"><h3>Get in Touch</h3></div>
              <p>Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus.</p>
            </div>
          </div>
        </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);