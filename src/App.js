import React, { Component } from "react";
import firebase from "firebase/app"; // import firebase package
import "firebase/firestore"; // import firestore from firebase
import "./App.scss";

// const firebaseConfig = {
//   apiKey: "AIzaSyAZXfyjF4BcjTgC0Uig_4-JpF3ZDkPwD_k",
//   authDomain: "lecture-app-tayro.firebaseapp.com",
//   databaseURL: "https://lecture-app-tayro.firebaseio.com",
//   projectId: "lecture-app-tayro",
//   storageBucket: "lecture-app-tayro.appspot.com",
//   messagingSenderId: "17246310095",
//   appId: "1:17246310095:web:47acefcd35b6a1955d31ba"
// }; // config key (from project settings)

// const firebaseApp = firebase.initializeApp(firebaseConfig); // initilize firebase app
// const db = firebaseApp.firestore(); // initializes the firestore database object
// const counterRef = db.collection("app-data").doc("VUJ9FOKlkxDxLlwfphtL"); // create a reference to the document which stores the counter
// const increment = firebase.firestore.FieldValue.increment(1); // increment function (a firestore feature - refer to documentation for more details)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // READ FIRESTORE DATABASE
  // componentDidMount() {
  //   // counterRef
  //   //   .get()
  //   //   .then(doc => {
  //   counterRef.onSnapshot(doc => {
  //     if (doc.exists) {
  //       this.setState({
  //         counter: doc.data().counter
  //       });
  //     } else {
  //       console.log("No document");
  //     }
  //   });
  //   // .catch(err => {
  //   //   console.log("Error: ", err);
  //   // });
  // }

  // UPDATE FIRESTORE
  increase = () => {
    //counterRef.update({ counter: increment });
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="app">
        <div className="counter">{counter}</div>
        <div className="counter-button" onClick={this.increase}>
          CLICK ME!
        </div>
      </div>
    );
  }
}

export default App;
