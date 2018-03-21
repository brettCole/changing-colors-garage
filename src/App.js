import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import './App.css';
import './assets/css/now-ui-kit.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component = { LandingPage } />
        </div>
      </Router>
    );
  }
}

export default App;
