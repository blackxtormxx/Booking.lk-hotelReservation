const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotel_schema = new Schema({
    hotelName: {
        type: String,
        required: true,
    },

    hotelRegNum: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    telPhone:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
    }, 
    
    password:{
        type: String,
        required: true,
    }, 

    username:{
        type: String,
        required: true,
    },

    status:{
        type: String,
        required: true,
    },

    imageUrl:{
        type: String,
        required: true,
    },

    timeStamp:{
        type: String,
        required: true,
    },   
});
const hotel_reg_schema = mongoose.model('hotel', hotel_schema);
module.exports = hotel_reg_schema;