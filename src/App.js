import React, { Component } from "react";
import Overview from "./components/Overview"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [1, 2],
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      tasks: [...this.state.tasks, this.state.tasks[this.state.tasks.length - 1] + 1]
    })
  }


  render() {
    return (
      <div className="App">
        <button onClick = {this.onClick}>Click</button>
        <h1>It works!</h1>
        <Overview tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
