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
              <h3 href="">Home</h3>
              <h3 href="">Features</h3>
            </div>
            <div className="nav_right">
              <h3 href="">Login</h3>
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
                    className="woman_image"
                    src="https://s3-alpha-sig.figma.com/img/8b13/9b0b/ea29df4128e02ce6d8ee5b553b6f3cc2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qEU1Uy4o5tbctkfBG18n0cHj5bLC6hJwbLQ9q9JfzrKWdsR4G4vtIPmMhEiF4ajPt-f0O6oMhOEsP6mCp5WsX08ph4jNaOGVaGXWaak6DBZLN1UWXqOFXlZI~mihnNvQOZLY7X9MIzcfgiEh2D55wKqd6Kun~hgqpwiOr4ELicq0s7f9onFfP0xRvFBpFrRYzHtd9~AvJAPdn~0AjKVV8LfUSw39Bzi2Yai9ud0JPn089YFr7~5XePfBa8Ktx0vrOfXKS0dHUxKlXvCc0AkaHSCIm7sozHsSr1dPlSyUaKbVzNF~rPZh~VU8tWT0CKet99bINiGS1oyERRf6btxBwg__"
                    alt="women image"
                  />
                  <div className="color_3"></div>
                  <img
                    className="follower_logo"
                    src="Group 124.png"
                    alt="follower logo"
                  />
                </div>
              </div>
              <div className="logo face">
                {" "}
                <img src="face.png" alt="facebook logo" />
              </div>
              <div className="logo ins">
                {" "}
                <img src="ins.png" alt="instagram logo" />
              </div>
              <div className="logo x">
                {" "}
                <img src="x.png" alt="x logo" />
              </div>
              <div className="logo sng">
                {" "}
                <img src="ch.png" alt="snpch logo" />
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
