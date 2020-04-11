const mongoose = require('mongoose');

const SeasonSchema = new mongoose.Schema({
    episodes: [
        {
            episode_number: {
                type: Number,
            },
            name: {
                type: String
            },
            overview: {
                type: String
            },
            still_path: {
                type: String
            }
        }
    ],
    serie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Serie'
    }
});

module.exports = mongoose.model('Season', SeasonSchema);