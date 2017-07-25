import React from 'react';
import ScrollArea from 'react-scrollbar';
import AlertContainer from 'react-alert';

import './style.scss';

import UserIcon from 'react-icons/lib/ti/user-outline';
import MailIcon from 'react-icons/lib/ti/mail';
import MessageIcon from 'react-icons/lib/ti/message-typing';
import LocationIcon from 'react-icons/lib/ti/location-outline';
import PhoneIcon from 'react-icons/lib/ti/phone-outline';
import CheckIcon from 'react-icons/lib/ti/input-checked-outline';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: '',
      email: ''
    };
    this.baseState = this.state
  }

  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 10000,
    transition: 'scale'
  };

  showSubmitAlert = () => {
    this.msg.show('Message submitted successfully!', {
      time: 5000,
      type: 'success'
    })
  }

  showErrorAlert = () => {
    this.msg.show('ERROR: Something happened... try again!', {
      time: 5000,
      type: 'error'
    })
  }

  handleAuthorChange = (e) => {
    this.setState({author: e.target.value});
  };

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  handleTextChange = (e)  => {
    this.setState({text: e.target.value});
  };

  resetForm = () => {
    this.setState(this.baseState)
  };

  handleSubmit = (e)  => {
    e.preventDefault();

    fetch('/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        author: this.state.author,
        text: this.state.text
      })
    })
      .then(this.showSubmitAlert())
      //.then((response) => response.json())
      // .then((responseJson) => {
      //   if (responseJson.success) {
      //     this.setState({ formSent: true });
      //   }
      //   else {
      //     this.setState({ formSent: false });
      //   }
      // })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const bodyStyle = {
      height: '200px'
    };

    return (
      <form onSubmit={this.handleSubmit} >
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <div className="input-field">
          <input
            type="text"
            placeholder="Full Name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
            className="form-control"
            required="required"
          />
          <UserIcon className="input-field-icon"/>
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.handleEmailChange}
            className="form-control"
            required="required"
          />
          <MailIcon className="input-field-icon"/>
        </div>
        <div className="input-field">
          <textarea
            type="text"
            placeholder="Message for me..."
            value={this.state.text}
            onChange={this.handleTextChange}
            className="form-control"
            rows="4"
            required="required"
            style={bodyStyle}
          />
          <MessageIcon className="input-field-icon"/>
        </div>
        <input type="submit" value="Send Email" className="send-button"/>
      </form>
    )
  }
}

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
              <p>Thanks for considering my services!</p>
              <p>As a full time student, freelancing is something I do for fun and as a passion. To get my reputation building, I am offering my services at an extremely low rate. Lets get in touch to discuss more!</p>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <LocationIcon size="35"/>
                </div>
                <div className="contact-info-text">
                  <h5>Dallas, Texas</h5>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <MailIcon size="35"/>
                </div>
                <div className="contact-info-text">
                  <h5>brandonreid2@my.unt.edu</h5>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <PhoneIcon size="35"/>
                </div>
                <div className="contact-info-text">
                  <h5>(469) 628-2005</h5>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <CheckIcon size="35"/>
                </div>
                <div className="contact-info-text">
                  <h5>Freelance Available</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 pad-col">
              <div className="block-title"><h3>Contact Form</h3></div>
              <ContactForm/>
            </div>
          </div>
        </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);