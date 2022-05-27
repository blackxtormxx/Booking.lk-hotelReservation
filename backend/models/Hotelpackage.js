const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hotelpackage_Schema = new Schema({

    packageName: {
        type: String,
        required: true,
    },

    hotelID: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },
    
    AdvancedPayment: {
        type: String,
        required: true,
    },

    image:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true
    },

    timeStamp:{
        type: String,
        required: true,
    },
});
const Hotel_package_regSchema = mongoose.model('Hotelpackage', Hotelpackage_Schema);
module.exports = Hotel_package_regSchema;