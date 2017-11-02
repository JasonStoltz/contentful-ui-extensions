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
          <h1 className="App-title">Page Builder</h1>
          <ComponentMenu />
          <Components />
        </header>
        <Value />
      </div>
    );
  }
}

export default App;
