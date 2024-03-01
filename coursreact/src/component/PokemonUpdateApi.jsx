import React, { useState } from 'react';

const PokemonUpdateApi = ({ pokemon, onUpdate }) => {
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:1337/pokemon/updatePost/${pokemon.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom: newName
        })
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour des données du Pokémon');
      }
      
      const updatedPokemon = await response.json();
      onUpdate(updatedPokemon);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div>
      <h2>Modifier les informations</h2>
      <label>
        Nouveau nom:
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
        />
      </label>
      <button onClick={handleUpdate}>Mettre à jour</button>
    </div>
  );
};

export default PokemonUpdateApi;
