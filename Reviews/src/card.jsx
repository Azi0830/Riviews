// import React from 'react'

const Card = (props) => {
  return (
    <div className="job">
      <img src={props.img} alt="Graphic Design" />
      <h2>{props.title}</h2>
      <p>{props.jobs}</p>
    </div>
  );
};

var Out = (props) => {
  return (
    <div className="out">
      <img src="/Group 46.png" alt="star logo" />
      <p className="messen">
        “Starting a business and getting it off the ground is easy if you
        follow.”
      </p>
      <img className="photo" src={props.img} alt="photo" />
      <h4>Jhon Smith</h4>
      <p>CEO Of Heart Business</p>
    </div>
  );
};

export default Card;
export { Out };
