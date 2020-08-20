const mongoose = require('mongoose');



// creating Schema models
const WritingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Writing', WritingSchema);