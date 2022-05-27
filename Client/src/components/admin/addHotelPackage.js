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
import Cookies from 'js-cookie';
import '../url';
import passwordValidator from 'password-validator';
var schema = new passwordValidator();

export default function AddHotelPackage() {

  
  const [packageName, setPackageName] = useState("");
  const [hotelDisBody, setDescription] = useState("");
  const [image, setimageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [AdvancedPayment, setAdvancedPayment] = useState("");


  function submitPackage(e)
  {
      e.preventDefault();
      const hotelID = Cookies.get('user_name');
      var description = hotelDisBody.toString();
      const addHotel ={ packageName, hotelID, price, image, description,AdvancedPayment}
  
        axios.post(global.url+"/HotelPackage/addHotelPackage",addHotel).then(() =>{
  
        Swal.fire({  
        title: "Success!",
        text: "Hotel Package Adding Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
          window.location.href = "/PackageDashboard";
        }
        });
  
        
    }).catch((err)=>{
  
          Swal.fire({  
          title: "Error!",
          text: "Hotel Package Adding Not Success",
          icon: 'error',
          confirmButtonText: "OK",
          type: "success"})
      })
    }

    
  return (
    <div className="Pagebg">
      <NavBar/>
        <MDBRow style={{paddingTop: '13%'  , paddingBottom: '5%'}}>
          <MDBCol sm='3'> </MDBCol>
          <MDBCol sm='6'>
            <MDBCard className=" bg-light border">
              <MDBCardBody className="p-5">
                <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>Add New Package</MDBCardTitle>
                <hr/>
                <div class="mb-3 mt-5">
                    <label  class="form-label">Package Name </label>
                    <input class="form-control" type="text"  onChange={(e) =>{
                            setPackageName(e.target.value);
                         }}/>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Price </label>
                    <input class="form-control" type="number"  onChange={(e) =>{
                            setPrice(e.target.value);
                         }}/>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Do You want advanced payment </label>
                    <select class="form-select" onChange={(e) =>{
                            setAdvancedPayment(e.target.value);
                         }}>
                           <option value="">Select option</option>
                           <option value="Want">Yes</option>
                           <option value="Unwanted">No</option>
                    </select>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Image </label>
                    <input class="form-control" type="text"  onChange={(e) =>{
                            setimageUrl(e.target.value);
                         }}/>
                </div>
                <div class="mb-3 ">
                    <label  class="form-label">Facilities</label>
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
                  <MDBBtn color='dark' href='./PackageDashboard' className='shadow-0 me-2' >
                    Back
                  </MDBBtn>&nbsp;&nbsp;&nbsp;
                  <MDBBtn href='#' color="success" className='shadow-0' onClick={submitPackage}  >Submit</MDBBtn>
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