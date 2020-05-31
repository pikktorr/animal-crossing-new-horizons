import React from "react";
import Card from "./Card";

const CardList = ({ villagers }) => {
  return (
    <div>
      {villagers.map((villager) => {
        console.log(villager.name["name-EUen"]);
        return (
          <Card
            key={villager.id}
            id={villager.id}
            name={villager.name["name-EUen"]}
            phrase={villager["catch-phrase"]}
          />
        );
      })}
    </div>
  );
};

export default CardList;
