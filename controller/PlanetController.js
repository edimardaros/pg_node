const Planet = require('../models/planet');

module.exports = {
  async store(req,res) {
    const {name, position} = req.body;

    const planet = await Planet.create({name, position});
    return res.json(planet);
  },

  async index(req, res) {
    const planets = await Planet.findAll();
    return res.json(planets);
  }
};