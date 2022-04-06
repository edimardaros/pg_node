(async () => {
  const planet = require('./models/planet');
  
  /*
  const newPlanet = await planet.create({
    name: "Venus",
    position: 5,
  });
  */

  // const seePlanets = await planet.findAll();
  // const seePlanets = await planet.findByPk(1);
  const seePlanets = await planet.findAll({
    where: {
      name: "Terra",
    },
  });

  console.log(seePlanets);

})();

// $ node index