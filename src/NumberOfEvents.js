import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 25,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 1) {
      return this.setState({ numberOfEvents: value });
    } else {
      console.log("Please enter a valid number.");
      return this.state.numberOfEvents;
    }
  };

  render() {
    return (
      <div>
        <label for="num-events">Number of Events</label>
        <input
          type="text"
          id="num-events"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}
export default NumberOfEvents;
