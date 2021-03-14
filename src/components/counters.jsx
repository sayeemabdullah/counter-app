import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <div>
          {this.props.counters.map((counter) => (
            <Counter
              key={counter.id}
              id={counter.id}
              value={counter.value}
              selected={true}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              counter={counter}
            ></Counter>
          ))}
        </div>
      </>
    );
  }
}

export default Counters;
