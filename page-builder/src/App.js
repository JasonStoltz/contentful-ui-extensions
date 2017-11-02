import React, { Component } from "react";

import "./App.css";

import ComponentMenu from "./components/ComponentMenu";
import Components from "./components/Components";
import Value from "./components/Value";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ComponentMenu />
          <Components />
        </header>
        <Value />
      </div>
    );
  }
}

export default App;
