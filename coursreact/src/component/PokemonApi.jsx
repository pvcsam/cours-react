import React, { useState, useEffect } from 'react';
import PokemonUpdateApi from './PokemonUpdateApi';
import PokemonDeleteApi from './PokemonDeleteApi';

const PokemonApi = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };
  const handleUpdatePokemon = (updatedPokemon) => {
    setPokemon(updatedPokemon);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:1337/pokemon/iWantAllInformation/${pokemonName}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données du Pokémon');
      }
      
      const data = await response.json();
      setPokemon(data[0]);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div>
      <h1>Informations sur un Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom du Pokémon:
          <input
            type="text"
            value={pokemonName}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Rechercher</button>
      </form>

      {pokemon && (
        <div>
          <h2>{pokemon.nom}</h2>
          {pokemon.dresseur && <p><strong>Dresseur:</strong> {pokemon.dresseur}</p>}
          {pokemon.moves && (
            <div>
              <h3>Moves:</h3>
              <ul>
                {pokemon.moves.map(move => (
                  <li key={move.id}>
                    <strong>Nom:</strong> {move.nom}<br />
                    {move.description && <strong>Description:</strong>} {move.description}<br />
                    {move.puissance && <strong>Puissance:</strong>} {move.puissance}<br />
                    {move.precision && <strong>Précision:</strong>} {move.precision}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {pokemon.types && (
            <div>
              <h3>Types:</h3>
              <ul>
                {pokemon.types.map(type => (
                  <li key={type.id}>{type.nom}</li>
                ))}
              </ul>
            </div>
          )}
          {pokemon.talents && (
            <div>
              <h3>Talents:</h3>
              <ul>
                {pokemon.talents.map(talent => (
                  <li key={talent.id}>
                    <strong>Nom:</strong> {talent.nom}<br />
                    {talent.description && <strong>Description:</strong>} {talent.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {pokemon.evolution && (
            <div>
              <h3>Évolution:</h3>
              <strong>Nom:</strong> {pokemon.evolution.nom}<br />
            </div>
          )}
          {pokemon.generation && (
            <div>
              <h3>Génération:</h3>
              <p>{pokemon.generation.numero}</p>
            </div>
          )}
          {!pokemon.evolution && <p>Aucune évolution</p>}
        </div>
        
      )}
      {pokemon && (
        <PokemonUpdateApi pokemon={pokemon} onUpdate={handleUpdatePokemon} />
        )}
    {pokemon && (
        <PokemonDeleteApi pokemonId={pokemon.id} onDelete={() => setPokemon(null)} />
        )}
    </div>
  );
}

export default PokemonApi;
