const router = require('express').Router();
let bookingPackage_model = require('../models/bookingPackage');
const timestamp = require('time-stamp');

router.route('/addBooking').post((req,res) => {

    const StartDate = req.body.StartDate;
    const EndDate = req.body.pEndDate;
    const payId = req.body.payId;
    const packageID = req.body.packageID;
    const packageName = req.body.packageName;
    const numOfNight = req.body.numOfNight;
    const taxiWant = req.body.taxiWant;
    const advancedPaymentStatus = req.body.advancedPaymentStatus;
    const advancedPaymentAmount = req.body.advancedPaymentAmount;
    const numOfPersons = req.body.numOfPersons;
    const user_id_number = req.body.user_id_number;
    const ClientName = req.body.ClientName;
    const email = req.body.email;
    const price = req.body.packageprice;
    const hotelID = req.body.hotelID;
    
    const status = "Booked";
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')

    const newHotelBooking = new bookingPackage_model({hotelID,payId, StartDate , EndDate, packageID, packageName, numOfNight, taxiWant, advancedPaymentStatus, advancedPaymentAmount, numOfPersons, status, timeStamp,user_id_number,ClientName,email,price});

    newHotelBooking.save()
        .then(() => res.json('Booking Adding Success!'))
        .catch((err) => {
            console.log(err);
        });
});

router.route("/allBookings").get((req,res) => {
    
    bookingPackage_model.find().then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});  

router.route("/allBookings/:id").get((req,res) => {
    
    bookingPackage_model.find({hotelID:req.params.id}).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});  
  

router.route("/deleteBooking/:ID").delete(async (req, res) => {
    var ID = req.params.ID; 
    bookingPackage_model.findByIdAndDelete(ID)
    .then(() => {
        res.status(200).send({status :"Booking Deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with Deleting Data",error: err.message});
    });
});

router.route('/updateBooking').put((req, res)=>{
    const id = req.params.id;
    const numOfPersons = req.body.numOfPersons;
    const numOfNight = req.body.numOfNight;

    const bookingPackage_model={numOfPersons, numOfNight}
       const update1 =  bookingPackage_model.findByIdAndUpdate(teacherId,updateTeacher).then(() => {       
            res.status(200).send({status :"Booking updated"});    
        }).catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        });
          
});


router.route('/acceptBooking/:id').put((req, res)=>{
    const id = req.params.id;
    const status = req.body.status;

    const bookingPackage={status}
       const update1 =  bookingPackage_model.findByIdAndUpdate(id,bookingPackage).then(() => {       
            res.status(200).send({status :"Booking updated"});    
        }).catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        });
          
});
module.exports = router;