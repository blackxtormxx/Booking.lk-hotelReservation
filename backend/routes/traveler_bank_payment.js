const router = require('express').Router();
let bankPayment_model = require('../models/bank_payment');
const timestamp = require('time-stamp');

router.route('/addBankPayment').post((req,res) => {
    
    const name = req.body.name;
    const payId = req.body.payId;
    const packageBookingID = req.body.payId;
    const imageName = req.body.imageName;
    const accountNumber = req.body.accountNumber;
    const amount = req.body.amount;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')
    const hotelID = req.body.hotelID;
    const travelerID = req.body.travelerID;

    const payment_saving = new bankPayment_model({accountNumber,hotelID,payId,name,packageBookingID,travelerID,amount,imageName,timeStamp});

    payment_saving.save()
        .then(() => res.json('Payment Done!'))
        .catch(err => res.status(400).json('Error: '+err));
});
  
router.route("/allBankPayment/:hotelId").get((req,res) => {
    
    const hotelId = req.params.hotelId;
    bankPayment_model.find({hotelId : hotelId , cardName : 'Visa' }).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   


  
module.exports = router;