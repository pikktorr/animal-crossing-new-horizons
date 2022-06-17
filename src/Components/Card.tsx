import React from 'react';

type CardProps = {
  id: number;
  name: string;
  phrase: string;
};

const Card = ({ id, name, phrase }: CardProps) => {
  return (
    <div className="dark-gray bg-light-yellow dib br2 pa3 ma2 shadow-5 w50 grow">
      <img
        className="br2 mw5"
        src={`https://acnhapi.com/v1a/images/villagers/${id}`}
        alt={`image_of_${name}`}
      />
      <div>
        <h2 className="f3 ma2">{name}</h2>
        <p
          className="phrase f5 ma1 gray"
          style={{ textTransform: 'capitalize' }}
        >
          "{phrase}"
        </p>
      </div>
    </div>
  );
};

export default Card;
