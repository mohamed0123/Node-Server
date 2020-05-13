const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    stage: {

    },
    owner: {
        type: String
    },
    description: {
        type: String
    },
    startDateTime: {
        type: Date
    },
    endDateTime: {
        type: Date
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);