import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import IndexPage from './components/index';
import Employees from './components/employees';
import Carmodels from './components/carmodels';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Car dealership"
          />
          <Router>
            <div className="container">
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/employees" component={Employees} />
              <Route exact path="/carmodels" component={Carmodels} />
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
