/**
 * Talent.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nom: {type: 'string'},
    description: {type: 'string'},
    pokemon: {
      collection: "Pokemon",
      via: "talents"
    }
  },

};

