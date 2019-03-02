import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import SignIn from "./components/SignIn";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <SignIn />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
