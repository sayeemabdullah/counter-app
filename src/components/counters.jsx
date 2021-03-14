import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    // this.setState({ value: this.state.value + 1 });
    console.log(counter);
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <div>
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              id={counter.id}
              value={counter.value}
              selected={true}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              counter={counter}
            ></Counter>
          ))}
        </div>
      </>
    );
  }
}

export default Counters;
