import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      updating: false
    };
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
      updating: true
    });
    this.reset();
  };

  reset = () => {
    setTimeout(() => {
      this.setState({ updating: false });
    }, 1000);
  };

  render() {
    const { counter, updating } = this.state;

    return (
      <div className="app">
        <div className="counter">{counter}</div>
        {updating && (
          <div className="counter-button disabled">UPDATING... 😁👍🏼</div>
        )}
        {!updating && (
          <div className="counter-button" onClick={this.increase}>
            CLICK ME!
          </div>
        )}
      </div>
    );
  }
}

export default App;
