import React, { Component } from "react";
class Overview extends Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
    let result = "<div>";
    for (let i = 0; i < this.props.tasks.length; i++) {
      result += `<li>${this.props.tasks[i]}</li>`;
    }
    result += "</div>";
    return (result);
  }
}

export default Overview;
