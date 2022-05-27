const router = require('express').Router();
let Hotelpackage_model = require('../models/Hotelpackage');
const timestamp = require('time-stamp');

router.route('/addHotelPackage').post((req,res) => {
    
    const packageName = req.body.packageName;
    const hotelID = req.body.hotelID;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;
    const timeStamp = timestamp('YYYY/MM/DD:mm:ss')
    const AdvancedPayment = req.body.AdvancedPayment;
    const newHPackage = new Hotelpackage_model({packageName,hotelID, price, image, description, timeStamp,AdvancedPayment});

    newHPackage.save()
        .then(() => res.json('Package Adding Success!'))
        .catch(err => res.status(400).json('Error: '+err));
});
  
router.route("/allHotelPackages").get((req,res) => {
    
    Hotelpackage_model.find().then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   
  

router.route("/allHotelPackages/:hotelId").get((req,res) => {
    
    Hotelpackage_model.find({hotelID: req.params.hotelId}).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   


router.route("/allPackageForHotel/:hotelID").get((req,res) => {
    
    const hotelID = req.params.hotelID;
    Hotelpackage_model.find({hotelID : hotelID}).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});   

router.route("/deletePackage/:ID").delete(async (req, res) => {
    var ID = req.params.ID; 
    Hotelpackage_model.findByIdAndDelete(ID)
    .then(() => {
        res.status(200).send({status :"Package Deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with Deleting Data",error: err.message});
    });
});

router.route('/updateHotelPackage').put((req, res)=>{
    
    const id = req.body.id;
    const packageName = req.body.packageName;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;
    const AdvancedPayment = req.body.AdvancedPayment;

    const updateHotelPackage={packageName, price, image, description,AdvancedPayment}
    const update1 =  Hotelpackage_model.findByIdAndUpdate(id,updateHotelPackage).then(() => {       
        res.status(200).send({status :"Hotel Package updated"});    
    }).catch((err) => {
        console.log(err);
        res.status(400).send({status: "Error with Updating Data",error: err.message});
    });
          
});

module.exports = router;