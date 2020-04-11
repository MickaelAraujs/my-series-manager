const mongoose = require('mongoose');

const Serie = mongoose.model('Serie');

const SeasonController = require('./SeasonController');

module.exports = {
    async index(request, response) {
        const series = await Serie.find(request.query);
        
        return response.json(series);
    },
    async store(request, response) {
        const { name } = request.body;
        let serie =  await Serie.findOne({ name });

        if(!serie) {
            serie = await Serie.create(request.body);

            return response.json(serie);
        }
    },
    async show(request, response) {
        const { name } = request.query;
        
        const serie = await Serie.findOne({name});

        if (!serie) {
            return response.json({});
        }

        return response.json(serie);
    },
    async update(request, response) {
        const serie = await Serie.findByIdAndUpdate(request.params.id,request.body,{ new:true });

        return response.json(serie);
    },
    async destroy(request, response) {
        const { id } = request.params;

        await Serie.findByIdAndDelete(id, { useFindAndModify: true });

        await SeasonController.destroy({ params: { id } });
        
        return response.send();
    }
}