import { Component } from "react";

class Features extends Component {
  render() {
    return (
      <div className="features">
        <div className="talent_2">
          <div className="find">
            <h1>our features to find talent</h1>
            <button>Try For Free</button>
          </div>
          <div className="talent">
            <div className="img">
              <img src="/Group (6).png" alt="strong logo" />
            </div>
            <h3>Strong Social Proof</h3>
            <p>Impress your boss with a professional in UI design.</p>
          </div>
        </div>
        <div className="talent_2">
          <div className="talent">
            <div className="img">
              <img src="/10.png" alt="star logo" />
            </div>
            <h3>Collected Review</h3>
            <p>Impress your boss with a professional in UI design.</p>
          </div>
          <div className="talent">
            <div className="img">
              <img src="/Group (5).png" alt="key logo" />
            </div>
            <h3>Top Rated Telent</h3>
            <p>Impress your boss with a professional in UI design.</p>
          </div>
        </div>
        <div className="talent_2">
          <div className="talent">
            <div className="img">
              <img src="/Group 10.png" alt="search logo" />
            </div>
            <h3>Find Out Project</h3>
            <p>Impress your boss with a professional in UI design.</p>
          </div>
          <div className="talent">
            <div className="img">
              <img src="/Group (7).png" alt="work logo" />
            </div>
            <h3>Portfolio Creator</h3>
            <p>Impress your boss with a professional in UI design.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
