import React, { Component } from "react";
import Overview from "./components/Overview"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  render() {
    return (
      <div className="App">
        <h1>It works!</h1>
        <Overview item="fuck you"/>
      </div>
    );
  }
}

export default App;
