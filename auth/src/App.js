import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {Feed} from './pages/Feed'
import {Login} from './pages/Login'
import {Home} from "./pages/Home";
import {DetailFeed} from "./pages/DetailFeed";
import React from "react";
import {SignUp} from "./pages/SignUp";
import {Feed} from "./pages/Feed";

function App() {
  return (
    <>
      <Router>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/signup"} component={SignUp}/>
          <Route path={"/feed"} component={Feed}/>
          <Route path={"/login"} component={Login}/>
          <Route path="/detail/:id" component={DetailFeed}/>
          {/*<Route/>*/}
      </Router>
    </>
  );
}

export default App;
