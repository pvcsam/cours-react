/**
 * Move.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nom: {type: 'string'},
    description: {type: 'string'},
    puissance: {type: 'integer'},
    precision: {type: 'integer'},
    pokemon: {
      collection: "Pokemon",
      via: "moves"
    }
  },

};

