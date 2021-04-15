import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import FrontendMastersBootcamp from './components/pages/FrontendMastersBootcamp';
import FreeCodeCamp from './components/pages/FreeCodeCamp';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route
            path='/frontend-masters-bootcamp'
            component={FrontendMastersBootcamp}
          />
          <Route path='/freecodecamp' component={FreeCodeCamp} />
          <Route component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
