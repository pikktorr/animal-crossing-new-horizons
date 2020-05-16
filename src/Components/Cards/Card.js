import React from "react";

const Card = ({ id, name, phrase }) => {
  return (
    <div className="dark-gray bg-washed-red dib br3 pa3 ma2 grow shadow-5 w50">
      <img
        className="br2 mw5"
        src={`http://acnhapi.com/images/villagers/${id}`}
        alt={`image_of_${name}`}
      />
      <div>
        <h2>{name}</h2>
        <p style={{ textTransform: "capitalize" }}>catchphrase: "{phrase}"</p>
      </div>
    </div>
  );
};

export default Card;
