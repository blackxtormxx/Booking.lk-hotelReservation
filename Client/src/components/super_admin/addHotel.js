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
import Footer from '../footer';
import '../url';
import passwordValidator from 'password-validator';
var schema = new passwordValidator();

export default function UserAddFeedback() {

  schema
    .is().min(4)                               
    .is().max(100)                             
    .has().uppercase()                         
    .has().lowercase()                         
    .has().digits(2)       
    .has().not().spaces()  
    .is().not().oneOf(['Passw0rd', 'Password123']); 

  const [isValidpassword, setIsValidpassword] = useState(false);
  const [isValidCFpassword, setIsValidCfpassword] = useState(false);
  const [messageCfpassword, setMessageCfpassword] = useState('');
  const [messageStrongpassword, setmessageStrongpassword] = useState('');
  const [CPassword, setCPassword] = useState("");

  const [emailStatus, setEmailStatus] = useState("");
  const [emailColor, setEmailColor] = useState("");

  const [hotelRegNum, setRegNumber] = useState("");
  const [hotelDisBody, setDescription] = useState("");
  const [hotelName, setName] = useState("");
  const [telPhone, setTelephone] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [password, setPassword] = useState("");


  function submitHotel(e)
  {
      e.preventDefault();
      var description = hotelDisBody.toString();
      const addHotel ={ hotelName , hotelRegNum , location , telPhone , email , description , username , password , imageUrl}
  
        axios.post(global.url+"/hotel/addHotel",addHotel).then(() =>{
  
        Swal.fire({  
        title: "Success!",
        text: "Hotel Adding Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
          window.location.href = "/Super_admin_hotel";
        }
        });
  
        
    }).catch((err)=>{
  
          Swal.fire({  
          title: "Error!",
          text: "Hotel Adding Not Success",
          icon: 'error',
          confirmButtonText: "OK",
          type: "success"})
      })


    }
    const setCPasswordFnction = (event) => {
      const ConfirmPassword = event;
         
              if ((ConfirmPassword === password) && (ConfirmPassword !=='') && (ConfirmPassword!== null) ) {
                  setIsValidCfpassword(true);
                  setMessageCfpassword('Password Are Matching');
              } else {
                  setIsValidCfpassword(false);
                  setMessageCfpassword('Passwords Are Not Match');
              }
      setCPassword(event);
    };

    const setPasswordFunction = (event) =>{
      if(schema.validate(event) === false) {
          setIsValidpassword(false);
          setmessageStrongpassword('Password is not strong');
         
      }else{
          setIsValidpassword(true);
          setmessageStrongpassword('Password is strong');
         
      }
      setPassword(event);
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
                <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>Add New Hotel</MDBCardTitle>
                <hr/>
                <div class="mb-3 mt-5">
                    <label  class="form-label">User Name </label>
                    <input class="form-control" type="text"  onChange={(e) =>{
                            setUserName(e.target.value);
                         }}/>
                </div>
                <div class="mb-3 mt-4">
                    <label>Password</label>
                    <input type="password"  class="form-control" onChange={(e) =>{
                        setPasswordFunction(e.target.value);
                    }} />
                    <span style={{fontSize:'12px', margin:'0px', padding:'0px'}}  className={`messageCfpassword ${isValidpassword ? 'success' : 'error'}`} >
                        {messageStrongpassword}
                    </span>
                </div>
                <div class="mb-3 mt-4">
                    <label>Confirm Password</label>
                    <input type="password"  class="form-control" onChange={(e) =>{
                        setCPasswordFnction(e.target.value);
                    }} />
                    <span style={{fontSize:'12px', margin:'0px', padding:'0px'}}  className={`messageCfpassword ${isValidCFpassword ? 'success' : 'error'}`} >
                        {messageCfpassword}
                    </span>
                </div>
                <hr className="mb-5"/>
                <div class="mb-3 mt-5">
                    <label  class="form-label">Hotel Name </label>
                    <input class="form-control" type="text"  onChange={(e) =>{
                            setName(e.target.value);
                         }}/>
                </div> 
                <div class="mb-3">
                    <label  class="form-label">Registration Number </label>
                    <input class="form-control" type="text"  onChange={(e) =>{
                            setRegNumber(e.target.value);
                         }}/>
                </div> 
                <div class="mb-3 ">
                    <label  class="form-label">Telephone </label>
                    <NumberFormat format="### ### ####" mask="_" class="form-control"  onChange={(e) =>{
                            setTelephone(e.target.value);
                    }}/>
                </div> 
                <div class="mb-3 ">
                    <label  class="form-label">Image </label>
                    <input class="form-control" type="text"  onChange={(e) =>{
                            setimageUrl(e.target.value);
                         }}/>
                </div>  
                <div class="mb-3">
                    <label  class="form-label">Location </label>
                    <input class="form-control" type="text"  onChange={(e) =>{
                            setLocation(e.target.value);
                         }}/>
                </div> 
                <div class="mb-3 ">
                    <label  class="form-label">Email </label>
                    <input class="form-control" type="email"  onChange={(e) =>{
                            setFunEmail(e.target.value);
                         }}/>
                    <span style={{fontSize: '14px' , color:emailColor}}>{emailStatus}</span>
                </div>   
                <div class="mb-3 ">
                    <label  class="form-label">Description</label>
                    <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onChange={(event, editor) =>{
                      const data = editor.getData();
                      setDescription(data);
                   }}
                />
                </div> 
                <div className='text-end'>
                  <MDBBtn color='dark' href='./Super_admin_hotel' className='shadow-0 me-2' >
                    Back
                  </MDBBtn>
                  <MDBBtn href='#' color="success" className='shadow-0' onClick={submitHotel}  >Submit</MDBBtn>
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