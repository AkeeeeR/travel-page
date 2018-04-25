import React, { Component } from 'react';
import logo from './logo.svg';
import './css/app.min.css';
import './css/header.min.css';

import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
