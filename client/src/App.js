import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

//components
import Navbar from "./components/NavBar/NavBar";
import SignIn from "./components/SignIn/SignIn";
import Manager from "./components/Manager/Manager";
import HK from "./components/HK/HK";
import AddDeli from "./components/Manager/AddDeli/AddDeli";
import AddHK from "./components/Manager/AddHK/AddHK";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={SignIn} exact />
          <Route path="/manager" component={Manager} exact />
          <Route path="/hk" component={HK} exact />
          <Route path="/addDeli" component={AddDeli} exact />
          <Route path="/addHK" component={AddHK} exact />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
