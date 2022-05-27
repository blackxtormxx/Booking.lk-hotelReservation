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
import {reactLocalStorage} from 'reactjs-localstorage';
import '../url';
import NavBar from '../main_parts/NavBar';
import Footer from '../footer';

export default function EditSuperAdminHotel() {

  var EditSuperAdminHotel = reactLocalStorage.getObject('EditSuperAdminHotel');
  const id = EditSuperAdminHotel[0];
  const [hotelRegNum, setRegNumber] = useState(EditSuperAdminHotel[2]);
  const dis = EditSuperAdminHotel[6];
  const [hotelName, setName] = useState(EditSuperAdminHotel[1]);
  const [telPhone, setTelephone] = useState(EditSuperAdminHotel[4]);
  const [location, setLocation] = useState(EditSuperAdminHotel[3]);
  const [email, setEmail] = useState(EditSuperAdminHotel[5]);
  const [username, setUserName] = useState(EditSuperAdminHotel[8]);
  const [password, setPassword] = useState(EditSuperAdminHotel[9]);
  const [hotelDisBody, setDescription] = useState("");
  const [status, setStatus] = useState(EditSuperAdminHotel[10]);
  const [ImageuRL, setImgURL] = useState(EditSuperAdminHotel[11]);

  function editHotel(e)
  {
      e.preventDefault();
      var description = hotelDisBody.toString();
      const updateHotel ={id , location, telPhone, email, description, status}
  
        axios.put(global.url+"/hotel/updateHotel",updateHotel).then(() =>{
  
        Swal.fire({  
        title: "Success!",
        text: "Hotel Updating Success!",
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
          text: "Hotel Updating Not Success",
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
                <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>Edit Hotel</MDBCardTitle>
                <hr/>
                <div class="mb-3 mt-5">
                    <label  class="form-label">User Name </label>
                    <input class="form-control" disabled value={username} type="text"  onChange={(e) =>{
                            setUserName(e.target.value);
                         }}/>
                </div>
                <hr className="mb-5"/>
                <div class="mb-3 mt-5">
                    <label  class="form-label">Hotel Name </label>
                    <input class="form-control" type="text" disabled value={hotelName}   onChange={(e) =>{
                            setName(e.target.value);
                         }}/>
                </div> 
                <div class="mb-3">
                    <label  class="form-label">Registration Number </label>
                    <input class="form-control" type="text" disabled value={hotelRegNum}   onChange={(e) =>{
                            setRegNumber(e.target.value);
                         }}/>
                </div> 
                <div class="mb-3 ">
                    <label  class="form-label">Telephone </label>
                    <NumberFormat format="### ### ####" mask="_" value={telPhone}  class="form-control"  onChange={(e) =>{
                            setTelephone(e.target.value);
                    }}/>
                </div>  
                <div class="mb-3">
                    <label  class="form-label">Location </label>
                    <input class="form-control" type="text"  value={location} onChange={(e) =>{
                            setLocation(e.target.value);
                         }}/>
                </div> 
                <div class="mb-3 ">
                    <label  class="form-label">Email </label>
                    <input class="form-control"  value={email} onChange={(e) =>{
                            setEmail(e.target.value);
                         }}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Status </label>
                    <select class="form-select" type="text"  value={status} onChange={(e) =>{
                            setStatus(e.target.value);
                         }}>
                           <option value="Active">Active</option>
                           <option value="Close">Close</option>
                    </select>
                </div>    
                <div class="mb-3 ">
                    <label  class="form-label">Description</label>
                    <CKEditor
                    editor={ ClassicEditor }
                    data={dis}
                    onChange={(event, editor) =>{
                      const data = editor.getData();
                      setDescription(data);
                   }}
                />
                </div> 
                <div className = "form-group" >
            <label > Image URL: </label> 
            <input type = "text"
            value={ImageuRL}
            required className = "form-control"
            name = "Image URL"
            placeholder = "Enter Image URL"
            onChange={(e) =>{
                setImgURL(e.target.value);
                }}/> </div >
                <div className='text-end'>
                  <MDBBtn color='dark' href='./Super_admin_hotel' className='shadow-0 me-2' >
                    Back
                  </MDBBtn>
                  <MDBBtn href='#' color="success" className='shadow-0' onClick={editHotel}  >Edit</MDBBtn>
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