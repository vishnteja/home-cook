import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import SignIn from "./components/SignIn/SignIn";
import Manager from "./components/Manager/Manager";
import HK from "./components/HK/HK";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          {/* <SignIn /> */}
          {/* <Manager /> */}
          <HK />>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
