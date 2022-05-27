const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URI;
global.URL = url;

mongoose.connect(url, { useNewUrlParser: true,   useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB connection successfully");
});

const class_hotel = require('./routes/hotel.js');
app.use('/hotel', class_hotel);

const user = require('./routes/user.js');
app.use('/user', user);

const HotelPackage = require('./routes/HotelPackage.js');
app.use('/HotelPackage', HotelPackage);

const traveler = require('./routes/traveler.js');
app.use('/traveler', traveler);

const packageBooking = require('./routes/packageBooking.js');
app.use('/packageBooking', packageBooking);

const traveler_card_payment = require('./routes/traveler_card_payment.js');
app.use('/traveler_card_payment', traveler_card_payment);

const traveler_bank_payment = require('./routes/traveler_bank_payment.js');
app.use('/traveler_bank_payment', traveler_bank_payment);


app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`);
});