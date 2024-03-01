import React, { useState } from 'react';

const PokemonCreateApi = ({ onAdd }) => {
  const [pokemonData, setPokemonData] = useState({
    nom: '',
    dresseur: null,
    moves: [],
    types: [],
    talents: [],
    createdAt: 0,
    updatedAt: 0,
    evolution: null,
    generation: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemonData({
      ...pokemonData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:1337/pokemon/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemonData)
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout du Pokémon');
      }
      const data = await response.json();
      onAdd(data);
      setPokemonData({
        nom: '',
        dresseur: null,
        moves: [],
        types: [],
        talents: [],
        createdAt: 0,
        updatedAt: 0,
        evolution: null,
        generation: null
      });
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <>
    <h1>Ajouter un Pokémon</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          type="text"
          name="nom"
          value={pokemonData.nom}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Ajouter</button>
    </form>
    </>
  );
}

export default PokemonCreateApi;
