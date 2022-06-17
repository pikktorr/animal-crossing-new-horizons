import React from 'react';
import Card from './Card';
import { Villager } from '../App/App';

type CardListProps = {
  villagers: Villager[];
};

const CardList = ({ villagers }: CardListProps) => {
  return (
    <div>
      {villagers.map((villager) => {
        return (
          <Card
            key={villager.id}
            id={villager.id}
            name={villager.name['name-USen']}
            phrase={villager['catch-phrase']}
          />
        );
      })}
    </div>
  );
};

export default CardList;
