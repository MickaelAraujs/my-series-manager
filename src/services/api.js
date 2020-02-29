import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.tvmaze.com/singlesearch'
});

export default api;