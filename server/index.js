const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/seriesmanager',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./models/Serie');

const Serie = mongoose.model('Serie');

app.get('/series',async (request,response) =>{
    const res = await Serie.find(request.query);
    return response.json(res);
});

app.post('/series', async (request,response) => {
    const res = await Serie.create(request.body);
    return response.json(res);
})

app.listen(3333);