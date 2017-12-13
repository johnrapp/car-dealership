import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import IndexPage from './components/index';
import Employees from './components/employees';
import Carmodels from './components/carmodels';

class App extends Component {
  render() {
    const titleLinkStyle = {
      textDecoration: 'none',
      color: 'inherit'
    };
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <AppBar
              title={<Link style={titleLinkStyle} to='/'>Sofias bilhandel</Link>}
            />
              <div className="container">
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/view/employees" component={Employees} />
                <Route exact path="/view/carmodels" component={Carmodels} />
              </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
