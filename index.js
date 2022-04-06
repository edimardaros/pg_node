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
  // const seePlanets = await planet.findAll({
  //   where: {
  //     name: "Terra",
  //   },
  // });


  const updatePlanets = await planet.findByPk(1);
    updatePlanets.name = "Terra888";
    await updatePlanets.save();

  console.log(updatePlanets);

})();

// $ node index