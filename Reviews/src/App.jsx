import { Component } from "react";
import "./style.css";
import React from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <div className="top">
            <div className="nav_left">
              <img src="/Group 69.png" alt="" />
              <a href="">Home</a>
              <a href="">Features</a>
            </div>
            <div className="nav_right">
              <a href="">Login</a>
              <input type="submit" value="Create Account" />
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default App;
