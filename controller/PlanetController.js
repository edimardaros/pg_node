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
  },

  async put(req,res) {
    const {name, size, position} = req.body;
    await Planet.update(
        {name, size, position},
        {
          where: {
            id : req.params.id,
          }
        }
      );
      return res.send('Planeta atualizado com sucesso!');
  },

  async delete(req,res) {
    const {name, size, position} = req.body;
    await Planet.destroy(
        {
          where: {
            id : req.params.id,
          }
        }
      );
      return res.send('Planeta deletado com sucesso!');
  },

};