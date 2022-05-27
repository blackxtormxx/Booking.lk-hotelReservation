import React ,{useState} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardTitle,
} from 'mdb-react-ui-kit';

import axios from 'axios';
import Swal from 'sweetalert2';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import NumberFormat from 'react-number-format';
import NavBar from '../main_parts/NavBar';
import {reactLocalStorage} from 'reactjs-localstorage';

import Footer from '../footer';
import '../url';
import passwordValidator from 'password-validator';
var schema = new passwordValidator();

export default function SelectPackage() {

  //reactLocalStorage.setObject("SelectPackage", [_id, packageName, hotelID, price, description, image, AdvancedPayment]);
 
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const packageName1 = urlParams.get('packageName');
  const AdvancedPayment = urlParams.get('AdvancedPayment');
  const status1 = urlParams.get('status');
  const packageID = urlParams.get('pid');
  const hotelID = urlParams.get('hid');

  var date = new Date();
  var currentDate = date.toISOString().substring(0,10);

  const [packageName, setPackageName] = useState(packageName1);
  const [AdvancedPayment1, setAdvancedPayment1] = useState("");
  const [price, setPrice] = useState(urlParams.get('price'));
  const [numOfNight, setnumOfNight] = useState("");
  const [numOfPersons, setnumOfPersons] = useState("");
  const [taxiWant, setTaxiWant] = useState("");
  const [ClientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [StartDate, setStartDate] = useState(currentDate);
  const [pEndDate, setEndDate] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [advancedPaymentAmount, setAdvancedPaymentAmount] = useState((AdvancedPayment === "Want")?(price*0.25):0);
  var user_id_number = 1;


  function submitPackage(e)
  {
      e.preventDefault();
      const payId = "id" + Math.random().toString(16).slice(2);
      const advancedPaymentStatus = AdvancedPayment;
      const advancedPaymentAmount = price*0.25;
      const packageprice = urlParams.get('price');
      const addBooking ={StartDate,pEndDate, payId,hotelID, packageID, packageName, numOfNight, taxiWant, advancedPaymentStatus, advancedPaymentAmount, numOfPersons,user_id_number,ClientName,email,packageprice}
  
        axios.post(global.url+"/packageBooking/addBooking",addBooking).then(() =>{
  
        Swal.fire({  
        title: "Success!",
        text: "Hotel Package Booking Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
          if(AdvancedPayment === "Want"){
            window.location.href = "/ClientPayment?payId="+payId+"&advancedPaymentAmount="+advancedPaymentAmount+"&hotelID="+hotelID;
          }else{
            window.location.href = "/Package_for_hotel?id="+hotelID;
          }
        }
        });
  
        
    }).catch((err)=>{
  
          Swal.fire({  
          title: "Error!",
          text: "Hotel Package Booking Not Success",
          icon: 'error',
          confirmButtonText: "OK",
          type: "success"})
      })
    }

    function setFunEmail(e){
      const email_Add = e;
      if(validateEmail(email_Add)){
        setEmailStatus("Email is valid");
        setEmailColor('green');
      }else{
        setEmailStatus("Email is invalid");
        setEmailColor('red');
      }
      setEmail(email_Add);
    }

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
  return (
    <div className="Pagebg">
      <NavBar/>
        <MDBRow style={{paddingTop: '13%'  , paddingBottom: '5%'}}>
          <MDBCol sm='3'> </MDBCol>
          <MDBCol sm='6'>
            <MDBCard className=" bg-light border">
              <MDBCardBody className="p-5">
                <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>Buy Hotel Package</MDBCardTitle>
                <hr/>
                <div class="row mt-3">
                  <div class="col">
                      <div class="mb-3 mt-5">
                          <label  class="form-label">Booking Start Date </label>
                          <input class="form-control" min={StartDate} value={StartDate} type="date" onChange={(e) =>{
                                  setStartDate(e.target.value);
                              }}/>
                      </div>
                  </div>
                  <div class="col">
                      <div class="mb-3 mt-5">
                          <label  class="form-label">Booking End Date </label>
                          <input class="form-control" min={StartDate} type="date" onChange={(e) =>{
                                  setEndDate(e.target.value);
                              }}/>
                      </div>
                  </div>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Your Name </label>
                    <input class="form-control" type="text" onChange={(e) =>{
                            setClientName(e.target.value);
                         }}/>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Your Email </label>
                    <input class="form-control" type="email"  onChange={(e) =>{
                            setFunEmail(e.target.value);
                         }}/>
                    <span style={{fontSize: '14px' , color:emailColor}}>{emailStatus}</span>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Package Name </label>
                    <input class="form-control" disabled type="text" value={packageName} onChange={(e) =>{
                            setPackageName(e.target.value);
                         }}/>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Price </label>
                    <input class="form-control" disabled type="number" value={price} onChange={(e) =>{
                            setPrice(e.target.value);
                         }}/>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Is there are advanced payment ?</label>
                    <select class="form-select" disabled value={AdvancedPayment} onChange={(e) =>{
                            setAdvancedPayment1(e.target.value);
                         }}>
                           <option value="">Select option</option>
                           <option value="Want">Yes</option>
                           <option value="Unwanted">No</option>
                    </select>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Advanced Payment</label>
                    <input class="form-control" disabled type="text" value={advancedPaymentAmount}  onChange={(e) =>{
                            setAdvancedPaymentAmount(e.target.value);
                         }}/>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Do you want taxi ?</label>
                    <select class="form-select"  onChange={(e) =>{
                            setTaxiWant(e.target.value);
                         }}>
                           <option value="">Select option</option>
                           <option value="Want">Yes</option>
                           <option value="Unwanted">No</option>
                    </select>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Number of persons ?</label>
                    <select class="form-select"  onChange={(e) =>{
                            setnumOfPersons(e.target.value);
                         }}>
                           <option value="">Select option</option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                           <option value="6">6</option>
                    </select>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Number of Nights ?</label>
                    <select class="form-select" onChange={(e) =>{
                            setnumOfNight(e.target.value);
                         }}>
                           <option value="">Select option</option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                           <option value="6">6</option>
                    </select>
                </div>
                <div className='text-end'>
                  <MDBBtn color='dark' href={"/Package_for_hotel?id="+hotelID} className='shadow-0 me-2' >
                    Back
                  </MDBBtn>&nbsp;&nbsp;&nbsp;
                  <MDBBtn href='#' color="success" className='shadow-0' onClick={submitPackage}  >Booking</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol sm='3'> </MDBCol>
        </MDBRow>
        <Footer/>
    </div>
  );
}