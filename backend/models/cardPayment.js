const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const card_payment_traveler = new Schema({
    cardName: {
        type: String,
        required: true,
    },

    payId: {
        type: String,
        required: true,
    },

    hotelID: {
        type: String,
        required: true,
    },

    cardNumber: {
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
    Holder:{
        type: String,
        required: true,
    },

    cvv:{
        type: String,
        required: true
    },

    expireDate:{
        type: String,
        required: true,
    },

    timeStamp:{
        type: String,
        required: true,
    },
    
    amount:{
        type: String,
        required: true,
    },
});
const card_payment_travelerSchema = mongoose.model('card_payment_traveler', card_payment_traveler);
module.exports = card_payment_travelerSchema;