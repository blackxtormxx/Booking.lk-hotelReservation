const router = require('express').Router();
let cardPayment_model = require('../models/cardPayment');
const timestamp = require('time-stamp');

router.route('/addCardPayment').post((req,res) => {
    
    const cardName = req.body.cardName;
    const payId = req.body.payId;
    const hotelID = req.body.hotelID;
    const cardNumber = req.body.cardNumber;
    const packageBookingID = req.body.packageBookingID;
    const Holder = req.body.Holder;
    const cvv = req.body.cvv;
    const amount = req.body.amount;
    const expireDate = req.body.expireDate;
    const travelerID = req.body.travelerID;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')

    const payment_saving = new cardPayment_model({payId, cardName, cardNumber, packageBookingID,travelerID, Holder, cvv, expireDate, timeStamp,amount,hotelID});

    payment_saving.save()
        .then(() => res.json('Payment Done!'))
        .catch((err) => {
            res.status(400).send({status: "Error with Updating Data",error: err.message});
            console.log(err);
        });
});
  
router.route("/allVisaPayment/:hotelId").get((req,res) => {
    
    const hotelId = req.params.hotelId;
    cardPayment_model.find({hotelId : hotelId , cardName : 'Visa' }).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   

router.route("/allMasterPayment/:hotelId").get((req,res) => {
    
    const hotelId = req.params.hotelId;
    cardPayment_model.find({hotelId : hotelId , cardName : 'Master' }).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   


module.exports = router;