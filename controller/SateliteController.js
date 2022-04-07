const Satelite = require('../models/satelite');
const Planet = require('../models/planet');

module.exports = {
  async store (req,res) {
    const {planetId} = req.params;
    const {name, serial_number} = req.body;

    const planet = await Planet.findByPk(planetId);

    if (!planet) {
      res.send('Esse planeta não existe');
    }

    const satelite = await Satelite.create({name, serial_number, planetId});
    
    return res.json(satelite);

  }
}