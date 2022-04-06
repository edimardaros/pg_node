(async () => {
  const planet = require('./models/planet');
  
  
  // -- create
  // const newPlanet = await planet.create({
  //   name: "Venus",
  //   position: 5,
  // });
  

  // -- find
  // const seePlanets = await planet.findAll();
  // const seePlanets = await planet.findByPk(1);
  // const seePlanets = await planet.findAll({
  //   where: {
  //     name: "Terra",
  //   },
  // });

  // -- update
  // const updatePlanets = await planet.findByPk(1);
  //   updatePlanets.name = "Terra888";
  //   await updatePlanets.save();

  // -- delete
  const deletePlanets = await planet.findByPk(1);
  console.log(deletePlanets);
  await deletePlanets.destroy();

})();

// $ node index