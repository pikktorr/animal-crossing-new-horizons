import React from "react";

const Card = (props) => {
  return (
    <div className="near-black bg-washed-red dib br3 pa3 ma2 grow shadow-5">
      <img
        className="br2"
        src={`http://acnhapi.com/images/villagers/${props.id}`}
        alt="character_image"
      />
      <div>
        <h2>{props.name}</h2>
        <p>"{props.phrase}"</p>
      </div>
    </div>
  );
};

export default Card;
