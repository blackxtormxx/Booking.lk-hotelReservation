const router = require('express').Router();
let traveler_model = require('../models/traveler');
const timestamp = require('time-stamp');

router.route('/addTraveler').post((req,res) => {
    

    const name = req.body.name;
    const tel = req.body.tel;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')

    const newtraveler_Reg = new traveler_model({name  , tel, timeStamp});

    newtraveler_Reg.save()
        .then(() => res.json('Traveler Registered!'))
        .catch(err => res.status(400).json('Error: '+err));
});


router.route('/loginTraveler').post((req, res, next) => {
    var tel = req.body.tel;

    traveler_model.findOne({$or: [{tel:tel}]})
    .then(systemreg =>{
        if(systemreg){
               
            res.json({
                message:true
            })
        }else{
            res.json({
                message: false
            })
        }
    })
});
  

router.route("/allTraveler").get((req,res) => {
    traveler_model.find().then((doctors) => {
        res.json(doctors);
    }).catch((err) => {
        console.log(err);
    });
});    

router.route('/updateTraveler').put((req, res)=>{
    const travelerId = req.body.ID;   
    const name = req.body.name;
    const email = req.body.email;
    const tel = req.body.tel;
    const address = req.body.address;
    const country = req.body.country;
    const birthDay = req.body.birthDay;
    const favouriteThings = req.body.favouriteThings;

    const updateTraveler={name ,email ,tel ,address ,country ,birthDay ,favouriteThings}
       const update1 =  traveler_model.findByIdAndUpdate(travelerId,updateTraveler).then(() => {       
            res.status(200).send({status :"Traveler updated"});    
        }).catch((err) => {
            console.log(err);
            res.status(400).send({status: "Error with Updating Data",error: err.message});
        });
          
});

router.route("/deleteTraveler/:ID").delete(async (req, res) => {
        const travelerId = req.body.ID;   
        traveler_model.findByIdAndDelete(ID)
        .then(() => {
            res.status(200).send({status :"Traveler Deleted"});
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with Deleting Data",error: err.message});
        });
});

module.exports = router;