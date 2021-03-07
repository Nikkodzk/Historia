const mongoose = require('mongoose');
const { Schema } = mongoose;


itemSchema = new Schema(
    {
        anio: String,
        nacional: String,
        mundial: String
    }
);

module.exports = mongoose.model('items', itemSchema);