import React from 'react';
import ScrollArea from 'react-scrollbar';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: '',
      email: ''
    }
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
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success) {
          this.setState({formSent: true})
        }
        else this.setState({formSent: false})
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Your email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Send Email" />
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
              <p>Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus.</p>
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