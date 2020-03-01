import axios from 'axios';
import apiKey from '../credentials/tmdb.json';

const key = apiKey.apiKey;

const api = axios.create({
    baseURL: `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=pt-BR`
});

export default api;