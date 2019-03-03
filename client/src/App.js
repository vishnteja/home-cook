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
import AddMenu from "./components/HK/AddMenu/AddMenu";

class App extends Component {
  state = {
    type: "Default",
    navKey: [1, 2, 3, 4]
  };

  setType = typeString => {
    // console.log(typeString);
    this.setState({ type: typeString });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar type={this.state.type} />
        <Switch>
          <Route
            path="/"
            render={() => <SignIn onLog={this.setType} />}
            exact
          />
          <Route path="/manager" component={Manager} exact />
          <Route path="/hk" component={HK} exact />
          <Route path="/addDeli" component={AddDeli} exact />
          <Route path="/addHK" component={AddHK} exact />
          <Route path="/addMenu" component={AddMenu} exact />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
