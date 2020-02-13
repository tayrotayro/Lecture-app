import React, { Component } from "react";
import "./App.scss";

const firebaseConfig = {
  apiKey: "AIzaSyAZXfyjF4BcjTgC0Uig_4-JpF3ZDkPwD_k",
  authDomain: "lecture-app-tayro.firebaseapp.com",
  databaseURL: "https://lecture-app-tayro.firebaseio.com",
  projectId: "lecture-app-tayro",
  storageBucket: "lecture-app-tayro.appspot.com",
  messagingSenderId: "17246310095",
  appId: "1:17246310095:web:47acefcd35b6a1955d31ba"
};
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
