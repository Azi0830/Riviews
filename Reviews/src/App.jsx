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
              <h5>Reviews</h5>
              <p>It's free and easy to use online review platform.</p>
              <div className="button">
                <input type="submit" value="Create Account" />
                <p>Learn More</p>
              </div>
              <img src="Group 128 (1).png" alt="logo" />
            </div>
            <div className="image">
              <div className="color">
                <div className="color_2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/8b13/9b0b/ea29df4128e02ce6d8ee5b553b6f3cc2?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtqIUh6Jr-O1EJAZXCXA1DlOGr4I~OydLno1xqJeT9IQN-T0XRikutRmK3utuyUh25bK-XxI8n6~8jA0F3jyoP5B5b7tw63MdY7HiAHTsAqvgzVPCP9l7TxACNEvrqvaQVeb8hSCQ3KHnvm9jyJZoEmCeRpH0dD1x7~ArOJiWC4Hfq5bT6UoTJacdUt53-0u0Op2H0j-XhcTeLtS8T2orzPPTjvNSDpy-mSSPtPBrssbnt4xCWdrFuoE0RE3YNTT6UhZwvbOyi0iFtuuGfn~GZKlb6leucmZPXPrUPfVFrjEojqQi6UYdL61VD1n5SRu0SJEU9CWqfejgqHEdI0cYA__"
                    alt="women image"
                  />
                  <div className="color_3"></div>
                </div>
              </div>
            </div>
            <img className="star_s_t" src="Vector (12).png" alt="star img" />{" "}
            <img className="star_s_t_2" src="Vector (12).png" alt="star img" />{" "}
            <img className="star_s_t_3" src="Vector (12).png" alt="star img" />{" "}
            <img className="star_l_t" src="Vector (14).png" alt="star img" />{" "}
            {/*t bu tiniqligi */}
            <img
              className="star_s_x"
              src="Vector (13).png"
              alt="star img"
            />{" "}
            <img className="star_s_x_2" src="Vector (13).png" alt="star img" />{" "}
            <img className="star_l_x" src="Vector (15).png" alt="star img" />{" "}
            <img className="star_l_x_2" src="Vector (15).png" alt="star img" />{" "}
            {/*x bu xiraligi */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
