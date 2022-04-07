const express = require('express');
const routes = express.Router();

const PlanetController = require('../controller/PlanetController');
const SateliteController = require('../controller/SateliteController');

routes.post('/planets', PlanetController.store);
routes.get('/planets', PlanetController.index);
routes.put('/planets/:id', PlanetController.put);
routes.delete('/planets/:id', PlanetController.delete);

routes.post('/planet/:planetId/satelites', SateliteController.store);
routes.get('/planet/:planetId/satelites', SateliteController.index);




module.exports = routes;
