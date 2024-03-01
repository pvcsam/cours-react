/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nom: {type: 'string'},
    evolution: {
      model: "Pokemon"
    },
    moves: {
      collection: "Move",
      via: "pokemon"
    },
    talents: {
      collection: "Talent",
      via: "pokemon"
    },
    types: {
      collection: "Type",
      via: "pokemon"
    },
    generation: {
      model: "Generation"
    },
  },

};

