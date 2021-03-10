import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imgUrl: "http://picsum.photos/200",
  };

  style = {
    fontSize: 12,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imgUrl} alt=""></img> */}
        <span className="badge badge-warning m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
