import { Component } from "react";
class Overview extends Component {
  render() {
    const arr = this.props.tasks;
    const arrList = arr.map((item) => <li>{item}</li>);
    return <ol>{arrList}</ol>;
  }
}

export default Overview;
