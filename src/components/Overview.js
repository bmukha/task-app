import { Component } from "react";
class Overview extends Component {
  render() {
    const arr = this.props.tasks;
    const arrList = arr.map((item) => <li key={item.id}>{item.text}</li>);
    return <ol>{arrList}</ol>;
  }
}

export default Overview;
