import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'

function App() {
  return (
  <Router>
    <div>
      <hr/>
      <Switch>
        <Route path="/" component={LandingPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
