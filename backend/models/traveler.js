const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelerRegSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
    },

    tel: {
        type: String,
        required: true,
        unique: true,
    },

    address:{
        type: String,
    },

    country:{
        type: String,
    },

    birthDay:{
        type: String,
    },

    
    favouriteThings:{
        type: String,
    },

    timeStamp:{
        type: String,
        required: true,
    },
});
const traveler_regSchema = mongoose.model('traveler', travelerRegSchema);
module.exports = traveler_regSchema;