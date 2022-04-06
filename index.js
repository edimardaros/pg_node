(async () => {
  const planet = require('./models/planet');
  
  const newPlanet = await planet.create({
    name: "Venus",
    position: 5,
  });

  console.log(newPlanet);

})();

