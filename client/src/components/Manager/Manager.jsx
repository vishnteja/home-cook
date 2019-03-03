import React, { Component } from "react";
import AddDeli from "./AddDeli/AddDeli";
import AddHK from "./AddHK/AddHK";
import { Switch, Route } from "react-router-dom";

class Manager extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <Switch>
          <Route path="/addDeli" component={AddDeli} exact />
          <Route path="/addHK" component={AddHK} exact />
        </Switch> */}
      </React.Fragment>
    );
  }
}

export default Manager;
