import React, { useState } from 'react';
import PokemonApi from './component/PokemonApi';
import PokemonCreateApi from './component/PokemonCreateApi';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  const handleAddPokemon = (newPokemon) => {
    setPokemonList([...pokemonList, newPokemon]);
  };

  const components = [
    <PokemonApi />,
    <PokemonCreateApi onAdd={handleAddPokemon} />
  ];

  const changeComponent = () => {
    setCurrentComponentIndex((currentComponentIndex + 1) % components.length);
  };

  return (
    <div>
      {components[currentComponentIndex]}
      <button onClick={changeComponent}>Changer le composant</button>
    </div>
  );
}

export default App;
