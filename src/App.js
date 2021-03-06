import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const textField = document.getElementById("text-field");
    if (textField.value) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            text: textField.value,
            id: uniqid(),
          },
        ],
      });
      textField.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text" id="text-field"></input>
        <button onClick={this.onClick}>Click</button>
        <h1>It works!</h1>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
