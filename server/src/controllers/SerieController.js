const mongoose = require('mongoose');

const Serie = mongoose.model('Serie');

module.exports = {
    async index(request, response) {
        const series = await Serie.find(request.query);
        
        return response.json(series);
    },
    async store(request, response) {
        const serie = await Serie.create(request.body);

        return response.json(serie);
    },
    async show(request, response) {
        const serie = await Serie.findById(request.params.id);

        return response.json(serie);
    },
    async update(request, response) {
        const serie = await Serie.findByIdAndUpdate(request.params.id,request.body,{ new:true });

        return response.json(serie);
    },
    async destroy(request, response) {
        await Serie.findByIdAndDelete(request.params.id);

        return response.send();
    }
}