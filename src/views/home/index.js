import React from 'react';
import Typist from 'react-typist';
import './style.scss';

const headerStyle = {
  margin: 0,
  color: '#00FF96'
};

const paraStyle = {
  margin: '10px',
  color: '#333',
  fontSize: '3vmin'
};

export default () => (

  <div className="home-container">
    <div className="sub-page">
      <section className="table">
        <div>
          <Typist startDelay={1500} avgTypingSpeed={70} >
            <span className="home-title">Brandon Reid</span>
            <br/>
            <span style={paraStyle}>Junior Full Stack Developer</span>
          </Typist>
        </div>
      </section>
    </div>
  </div>
);