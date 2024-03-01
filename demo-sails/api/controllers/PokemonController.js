/**
 * PokemonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  iWantAllInformation: async (req, res) => {
    try {
      let pokemon = await Pokemon.find({ nom: req.params.nom }).populate('moves').populate('types').populate('talents').populate('evolution').populate('generation');
      res.send(pokemon);
    } catch (error) {
      return res.serverError(error);
    }
  },

  createPost: async (req, res) => {
    try {
      const pokemon = await Pokemon.create(req.allParams()).fetch();
      res.send(pokemon);
    } catch (error) {
      return res.serverError(error);
    }
  },

  updatePost: async (req, res) => {
    try {
      let params = req.allParams();
      let pokemon = await Pokemon.update({ id: params.id }).set(params).fetch();
      res.send(pokemon);
    } catch (error) {
      return res.serverError(error);
    }
  },

  delete: async (req, res) => {
    try {
      let params = req.allParams();
      let pokemon = await Pokemon.destroy({ id: params.id }).fetch();
      res.send(pokemon);
    } catch (error) {
      return res.serverError(error);
    }
  },
};
