const axios = require('axios');

const apiKey = require('../credentials/tmdb.json').apiKey;

module.exports = {
    async show(request, response) {
        const { status = 'assistir', serie } = request.query;

        try {

            //procurando na api do tmdb série que vem da query da request
            const apiResponse = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=pt-BR&query=${serie}`);
         
            const { name, poster_path, backdrop_path, overview, id } = apiResponse.data.results[0]; //apenas o primeiro item do array é relevante
            
            const details = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=pt-BR`);

            const { number_of_episodes, number_of_seasons } = details.data;
            let { genres } = details.data;
            
            //retornando apenas os nomes dos gêneros no array
            genres = genres.map(genre => genre.name);

            const poster_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
            const background_url = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

            const data = {
                name,
                poster_url,
                background_url,
                description: overview,
                genres,
                number_of_episodes,
                number_of_seasons,
                status
            };
            
            return response.json(data);

        } catch (err) {
            console.log(`Não foi possível acessar api ${err}`);
        }
    }
};