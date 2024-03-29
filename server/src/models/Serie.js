const mongoose = require('mongoose');

const SerieSchema = new mongoose.Schema({
    original_name: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    poster_url: {
        type: String,
        required: true
    },
    background_url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    number_of_episodes: {
        type: Number,
        required: true
    },
    number_of_seasons: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    seasons: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Season'
        }
    ]
});

mongoose.model('Serie',SerieSchema);