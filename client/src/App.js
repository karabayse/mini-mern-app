import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Dashboard from './components/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
