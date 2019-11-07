import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Wrapper from './components/Wrapper';


import About from './pages/About';
import Search from './pages/Search';
import Login from './pages/Login';
import Host from './pages/Host';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/discover" component={Discover} /> */}
          <Route exact path="/search" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/host" component={Host} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

