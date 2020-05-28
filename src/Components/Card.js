import React from "react";

const Card = ({ id, name, phrase }) => {
  return (
    <div className="navy bg-light-yellow dib br2 pa3 ma2 shadow-5 w50 grow">
      <img
        className="br2"
        src={`https://acnhapi.com/images/villagers/${id}?size=200x200`}
        alt={`image_of_${name}`}
        loading={"lazy"}
      />
      <div>
        <h2 className="f3 ma2">{name}</h2>
        <p
          className="phrase f5 ma1 navy"
          style={{ textTransform: "capitalize" }}
        >
          "{phrase}"
        </p>
      </div>
    </div>
  );
};

export default Card;
