import React, { Component } from "react";
class Overview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li>{this.props.item}</li>;
  }
}

export default Overview;
