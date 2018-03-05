import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    givenName: '',
    surname: '',
    email: '',
    phone: '',
    houseName: '',
    street: '',
    suburb: '',
    state: '',
    postCode: '',
    country: '',
  });

  render() {
    return (
      <div className="app">
        <Form {...this.state} onChange={this.handleChange} />
        <Preview {...this.state} />
      </div>
    );
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };
}

export default App;
