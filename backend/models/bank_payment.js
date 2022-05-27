const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bank_payment_traveler = new Schema({
    accountNumber: {
        type: String,
        required: true,
    },   
    
    hotelID: {
        type: String,
        required: true,
    },

    payId: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    packageBookingID: {
        type: String,
        required: true,
    },
    travelerID: {
        type: String,
        required: true,
    },

    amount:{
        type: String,
        required: true,
    },

    imageName:{
        type: String,
        required: true
    },

    timeStamp:{
        type: String,
        required: true,
    },
});
const bank_payment_TravelerSchema = mongoose.model('bank_payment_traveler', bank_payment_traveler);
module.exports = bank_payment_TravelerSchema;