const express = require('express');
const routes = express.Router();

const PlanetController = require('../controller/PlanetController');

routes.post('/planets', PlanetController.store);
routes.get('/planets', PlanetController.index);
routes.put('/planets/:id', PlanetController.put);
routes.delete('/planets/:id', PlanetController.delete);

routes.post('/planet/:planetId/satelites', SateliteController.store);

// const SateliteController = require('../controller/SateliteController');


module.exports = routes;
