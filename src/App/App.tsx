import React, { ChangeEvent, useEffect, useState } from 'react';
import Logo from '../Components/Logo';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import { getVillagers } from '../hooks/requests';

export type Villager = {
  id: number;
  name: {
    'name-USen': string;
  };
  'catch-phrase': string;
};

const App = () => {
  const [searchField, setSearchField] = useState<string>('');
  const [villagers, setVillagers] = useState<Villager[]>([]);
  const [filteredVillagers, setFilteredVillagers] = useState(villagers);

  useEffect(() => {
    const callGetVillagers = async () => {
      const villagers = await getVillagers<Villager[]>();
      setVillagers(villagers);
    };
    callGetVillagers().catch((error) => console.log(error));

    return () => {};
  }, []);

  useEffect(() => {
    const filteredVillagers = villagers.filter((villager) => {
      const animalName = villager.name['name-USen'];
      return animalName?.toLowerCase().includes(searchField);
    });

    setFilteredVillagers(filteredVillagers);
  }, [villagers, searchField]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  };

  return !villagers.length ? (
    <h1 className="tc pa3 bg-light-yellow mid-gray">Hold on a sec...</h1>
  ) : (
    <div className="tc">
      <Logo />
      <SearchBox
        id={'searchBox'}
        placeholder="search villagers"
        handleSearchChange={handleSearchChange}
        searchField={searchField}
      />
      <CardList villagers={filteredVillagers} />
    </div>
  );
};

export default App;
