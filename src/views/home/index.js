import React from 'react';

import './style.scss';

const headerStyle = {
  margin: 0,
  color: '#00FF96'
};

const paraStyle = {
  margin: '10px',
  color: '#333'
};

export default () => (

  <div className="home-container">
    <div className="sub-page">
      <section className="table">
        <div>
          <h1 style={headerStyle}>Brandon Reid</h1>
          <p style={paraStyle}>Junior Full Stack Developer</p>
        </div>
      </section>
    </div>
  </div>
);