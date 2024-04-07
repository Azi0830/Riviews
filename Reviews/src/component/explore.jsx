import Card from "../card";
import "../style.css";

function Explore() {
  return (
    <div>
      <div className="explore">
        <div className="text">
          <h1>Explore The Marketplace</h1>
          <p>
            Find the perfect freelance services for your business · Popular
            professional services ·
          </p>
        </div>
        <div className="jobs">
          <Card
            img="/Group 24 (2).png"
            title="Graphic Design"
            jobs="1k Jobs Available"
          />
          <Card
            img="/Group 26.png"
            title="UI Designer"
            jobs="5k Jobs Available"
          />
          <Card
            img="/Group 28.png"
            title="UX Designer"
            jobs="7k Jobs Available"
          />
        </div>
        <div className="jobs">
          <Card
            img="/Group 31.png"
            title="Content Writing"
            jobs="500 Jobs Available"
          />
          <Card
            img="/Group 34.png"
            title="Digital Marketing"
            jobs="2k Jobs Available"
          />
          <Card img="/Group 37.png" title="SEO" jobs="1.5k Jobs Available" />
        </div>
      </div>
      <div className="starting">
        <div className="text">
          <h1>Get Starting Work With Startup Today.</h1>
          <p>
            Starting a business and getting it off the ground is easy if you
            follow.
          </p>
        </div>
        <div>
          <button>Start Now</button>
        </div>
      </div>
    </div>
  );
}
//cardni randlarini qanday alohida qilamiz?
export default Explore;
