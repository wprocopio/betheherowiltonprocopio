const express = require('express');
const crypto = require ('crypto');
const routes = express.Router();
const OngsController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const PorfilleController = require('./controllers/porfilleController');
const SessionController = require('./controllers/SessionController');


routes.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

routes.get('/',OngsController.index);
routes.get('/ongs',OngsController.index);
routes.post('/ongs',OngsController.create);
routes.get('/incidents',IncidentsController.index);
routes.post('/incidents',IncidentsController.create);
routes.delete('/incidents/:id',IncidentsController.delete);
routes.get('/profile',PorfilleController.index);
routes.post('/sessions',SessionController.create);

module.exports = routes;