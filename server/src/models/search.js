const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    location: {
        
            type: String,
            required: true
       
    },
    ipAddress: {
        type: String,
        required: true
    },
    geoLocation: {
        city: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
});

const Search = mongoose.model('search', searchSchema);

module.exports = Search;