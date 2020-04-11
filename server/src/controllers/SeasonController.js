const axios = require('axios');
const mongoose = require('mongoose');

const Serie = mongoose.model('Serie');
const Season = mongoose.model('Season');

const apiKey = require('../credentials/tmdb.json').apiKey;

module.exports = {
    async show(request, response) {
        const { id: serie_id } = request.params;

        const season = await Season.find({ serie: serie_id });

        if (season.length === 0) {
            const serie = await Serie.findById(serie_id);

            try {
                const apiResponse = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=pt-BR&query=${serie.original_name}`);

                const { id } = apiResponse.data.results[0];
                const seasonsArray = [];

                for (let season=1; season<=serie.number_of_seasons; season++) {
                    const seasonResponse = await axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${apiKey}&language=pt-BR`);

                    let { episodes } = seasonResponse.data;

                    episodes = episodes.map(episode => {
                        return {
                            episode_number: episode.episode_number,
                            name: episode.name,
                            overview: episode.overview,
                            still_path: `https://image.tmdb.org/t/p/w500${episode.still_path}`
                        }
                    });

                    const result = await Season.create({ episodes, serie: serie._id });
                    seasonsArray.push(result);
                
                }

                return response.json(seasonsArray);

            } catch (err) {
                console.log('Erro ao carregar temporadas... ' + err);
            }
        }
        
        return response.json(season);
    },

    async destroy(request, response) {
        const { id: serie_id } = request.params;

        const seasons = await Season.find({ serie: serie_id });

        seasons.forEach( async (season) => {
            await Season.findByIdAndDelete(season._id);
        })

        return;
    }
};