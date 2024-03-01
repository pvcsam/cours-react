import React from 'react';

const PokemonSupprimer = ({ pokemonId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:1337/pokemon/delete/${pokemonId}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du Pokémon');
      }
      
      onDelete();
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div>
      <h2>Supprimer le Pokémon</h2>
      <p>Êtes-vous sûr de vouloir supprimer ce Pokémon?</p>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
};

export default PokemonSupprimer;
