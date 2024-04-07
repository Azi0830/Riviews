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
          <div className="border"></div>
          <div className="riview">
            <div className="text">
              <h2>Hiring Smarter With Better</h2>
              <h1>Reviews</h1>
              <p>It's free and easy to use online review platform.</p>
              <div className="button">
                <input type="submit" value="Create Account" />
                <p>Learn More</p>
              </div>
            </div>
            <div className="image">
              <img
                src="https://s3-alpha-sig.figma.com/img/8b13/9b0b/ea29df4128e02ce6d8ee5b553b6f3cc2?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtqIUh6Jr-O1EJAZXCXA1DlOGr4I~OydLno1xqJeT9IQN-T0XRikutRmK3utuyUh25bK-XxI8n6~8jA0F3jyoP5B5b7tw63MdY7HiAHTsAqvgzVPCP9l7TxACNEvrqvaQVeb8hSCQ3KHnvm9jyJZoEmCeRpH0dD1x7~ArOJiWC4Hfq5bT6UoTJacdUt53-0u0Op2H0j-XhcTeLtS8T2orzPPTjvNSDpy-mSSPtPBrssbnt4xCWdrFuoE0RE3YNTT6UhZwvbOyi0iFtuuGfn~GZKlb6leucmZPXPrUPfVFrjEojqQi6UYdL61VD1n5SRu0SJEU9CWqfejgqHEdI0cYA__"
                alt="women image"
              />
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default App;
