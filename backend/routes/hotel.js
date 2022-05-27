const router = require('express').Router();
let Hotel_model = require('../models/hotel');
let user_model = require('../models/user');
const bcrypt = require('bcryptjs');
const timestamp = require('time-stamp');

router.route('/addHotel').post((req,res) => {
    bcrypt.hash(req.body.password, 10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
    const hotelName = req.body.hotelName;
    const imageUrl = req.body.imageUrl;
    const hotelRegNum = req.body.hotelRegNum;
    const location = req.body.location;
    const telPhone = req.body.telPhone;
    const email = req.body.email;
    const description = req.body.description;
    const username = req.body.username;
    const password = hashedPass;
    const status = "Active";
    const userType = "Hotel";
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss');

    const hotel_saving = new Hotel_model({hotelName, hotelRegNum, location, telPhone, email, description, timeStamp , username , password , status , imageUrl});

    hotel_saving.save()
        .then(() => {

            const userSaving = new user_model({username , password , userType});
            userSaving.save()
            .then(() => res.json('User Adding Success!'))
            .catch((err) => {
                console.log(err);
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with Deleting Data",error: err.message});
        });
    
    })
});
  
router.route("/allHotels").get((req,res) => {
    
    Hotel_model.find().then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   
 
router.route("/deleteHotel/:ID").delete(async (req, res) => {
    var ID = req.params.ID; 
    Hotel_model.findByIdAndDelete(ID)
    .then(() => {
        res.status(200).send({status :" Hotel Deleted "});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: " Error with Deleting Data ",error: err.message});
    });
});


router.route('/updateHotel').put((req, res)=>{
    
    const id = req.body.id;
    const location = req.body.location;
    const telPhone = req.body.telPhone;
    const email = req.body.email;
    const status = req.body.status;
    const description = req.body.description;

    const updateHotel={telPhone ,location ,email ,description,status}
    const update1 =  Hotel_model.findByIdAndUpdate(id,updateHotel).then(() => {       
        res.status(200).send({status :"Hotel updated"});    
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status: "Error with Updating Data",error: err.message});
    });
          
});

module.exports = router;