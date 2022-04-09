const Planet = require('../models/planet');
const Satelite = require('../models/satelite');

// Planet.hasOne(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Planet.hasMany(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Satelite.belongsTo(Planet, {foreignKey:"planetId", as: "planet"});

module.exports = {Planet, Satelite};

