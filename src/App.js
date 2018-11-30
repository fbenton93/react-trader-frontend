import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import TradingDesk from './pages/TradingDesk';
import ErrorPage from './pages/ErrorPage';

import './stylesheets/app.css'

class App extends Component {

  render() {
    return (
      <div id="app-container">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/portfolio" />} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/login" component={Login} />
          <Route path="/trading-desk" component={TradingDesk} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    )
  }
}


export default withRouter(App);
