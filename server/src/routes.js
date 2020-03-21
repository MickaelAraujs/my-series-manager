const express = require('express');
const routes = express.Router();

const SerieController = require('./controllers/SerieController');
const SearchController = require('./controllers/SearchController');

routes.get('/serie', SerieController.show);
routes.get('/series', SerieController.index);
routes.post('/series', SerieController.store);
routes.put('/series/:id', SerieController.update);
routes.delete('/series/:id', SerieController.destroy);

routes.get('/search', SearchController.show);


module.exports = routes;