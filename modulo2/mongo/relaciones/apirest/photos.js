//modelo photos

const mongoose = require('mongoose');
let Photos = mongoose.Schema;

const photosSchema = new Photos
(
    {
        name: String,
        url: String, 
        title: String,
        description: String,
    }
);

module.exports = mongoose.model('photos', photosSchema);