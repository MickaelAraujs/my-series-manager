const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//app
const app = express();
app.use(express.json());

app.use(cors());

//db
mongoose.connect('mongodb://localhost:27017/seriesmanager',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./src/models/Serie');

//rotas
app.use('/',require('./src/routes'));

app.listen(3333);