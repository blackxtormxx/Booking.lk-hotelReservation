const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageBookingSchema = new Schema({
    hotelID: {
        type: String,
        required: true,
    },    
    
    payId: {
        type: String,
        required: true,
    },   

    StartDate: {
        type: String,
        required: true,
    },
    
    EndDate: {
        type: String,
        required: true,
    },

    user_id_number: {
        type: String,
        required: true,
    },

    packageID: {
        type: String,
        required: true,
    },
    
    ClientName: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
    },
    
   
    packageName: {
        type: String,
        required: true,
    },

    numOfNight:{
        type: String,
        required: true,
    },

    taxiWant:{
        type: String,
        required: true
    },

    advancedPaymentStatus: {
        type: String,
        required: true,
    },

    advancedPaymentAmount:{
        type: String,
        required: true,
    },
    
    numOfPersons:{
        type: String,
        required: true,
    },   

    status:{
        type: String,
        required: true,
    },

    timeStamp:{
        type: String,
        required: true,
    },

    price:{
        type: String,
        required: true,
    },
});
const packageBooking_regSchema = mongoose.model('packageBooking', packageBookingSchema);
module.exports = packageBooking_regSchema;