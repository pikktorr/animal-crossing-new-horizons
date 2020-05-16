import React from "react";
import Card from "./Card";

const CardList = ({ villagers }) => {
  return (
    <div>
      {Object.entries(villagers).map((villager) => {
        const animalObject = villager[1];
        return (
          <Card
            key={animalObject.id}
            id={animalObject.id}
            name={animalObject.name["name-en"]}
            phrase={animalObject["catch-phrase"]}
          />
        );
      })}
    </div>
  );
};

export default CardList;
