import React from 'react';

type CardProps = {
  id: number;
  name: string;
  phrase: string;
};

const Card = ({ id, name, phrase }: CardProps) => {
  return (
    <div className="bg-yellow-200 text-slate-700 text-center rounded-xl p-4 hover:scale-105 transition duration-500 ease-in-out">
      <img
        className="rounded-md"
        src={`https://acnhapi.com/v1a/images/villagers/${id}`}
        alt={`image_of_${name}`}
      />
      <div>
        <h1 className="mt-4 uppercase font-bold">{name}</h1>
        <p
          className="italic font-light"
          style={{ textTransform: 'capitalize' }}
        >
          "{phrase}"
        </p>
      </div>
    </div>
  );
};

export default Card;
