import React from 'react';
import Typist from 'react-typist';
import './style.scss';

const headerStyle = {
  margin: 0,
  color: '#00FF96'
};

const tableStyle = {
  paddingBottom: '50px'
};

export default () => (

  <div className="home-container">
    <div className="sub-page">
      <section className="table">
        <div style={tableStyle}>
          <Typist startDelay={1000} avgTypingSpeed={70} >
            <span className="home-title">Brandon Reid</span>
            <br/>
            <span className="home-sub-title">Junior Full Stack Developer</span>
          </Typist>
        </div>
      </section>
    </div>
  </div>
);