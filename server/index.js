const express = require('express');
const mongoose = require('mongoose');

//app

const app = express();
app.use(express.json());

//db

mongoose.connect('mongodb://localhost:27017/seriesmanager',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./models/Serie');

//rotas

const SerieController = require('./controllers/SerieController');

app.get('/series', SerieController.index);
app.get('/series/:id', SerieController.show);
app.put('/series/:id', SerieController.update);
app.delete('/series/:id', SerieController.destroy);
app.post('/series', SerieController.store);

app.listen(3333);