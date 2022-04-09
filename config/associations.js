const Planet = require('../models/planet');
const Satelite = require('../models/satelite');
const Cap = require('../models/cap');
const Spaceship = require('../models/spaceship');

Planet.hasOne(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Satelite.belongsTo(Planet, {foreignKey:"planetId", as: "planet"});

// Planet.hasMany(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
// Satelite.belongsTo(Planet, {foreignKey:"planetId", as: "planet"});

Cap.belongsToMany(Spaceship, {
    foreignKey:"capId",
    through: "capSpaceship",
    as: "spaceship",
  });

Spaceship.belongsToMany(Cap, {
  foreignKey:"spaceshipId",
  through: "capSpaceship",
  as: "caps",
});

module.exports = {Planet, Satelite};

