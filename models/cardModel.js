const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    expiration_date: {
        type: String,
        required: true
    },
    serial_number: {
        type: String,
        required: true
    },
    security_code: {
        type: String,
        required: true
    }
});

const Card = model('Card', cardSchema);

module.exports = Card;