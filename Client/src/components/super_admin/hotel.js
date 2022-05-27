import React ,{useState , useEffect} from 'react';
import {
  MDBTable,
  MDBIcon,
  MDBTableHead,
  MDBTableBody,
  MDBCard,
  MDBBtn,
} from 'mdb-react-ui-kit';

import axios from 'axios';
import Swal from 'sweetalert2';
import {reactLocalStorage} from 'reactjs-localstorage';
import NavBar from '../main_parts/NavBar';
import Footer from '../footer';
import '../url';

export default function AdminDash() {
  function goToAddHotelPage() {
    window.location.href="./Super_admin_AddHotel";
  }
    
  const [hotels,setAllHotels] = useState([]);
  useEffect(() => {
            axios.get(global.url+"/hotel/allHotels")
            .then(res => setAllHotels(res.data))
            .catch(error => console.log(error));
  });

  function edit(_id,hotelName,hotelRegNum,location,telPhone,email,description,timeStamp,username,password,status,imageUrl){
    reactLocalStorage.setObject("EditSuperAdminHotel", [_id,hotelName,hotelRegNum,location,telPhone,email,description,timeStamp,username,password,status,imageUrl]);
    window.location.href = "/EditSuperAdminHotel";
  }



  function deleteHotel(hID)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are You Sure?',
      text: "Do You Want To Delete Hotel?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:5000/hotel/deleteHotel/"+hID).then(() =>{
          Swal.fire({  
              title: "Success!",
              text: "Hotel Deleted",
              icon: 'success',
              confirmButtonText: "OK",
              type: "success"}).then(() =>{
                window.location.reload();
              })
  
      }).catch((err)=>{
          Swal.fire({  
              title: "Error!",
              text: "Hotel Not Deleted",
              icon: 'error',
              confirmButtonText: "OK",
              type: "success"})
      })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Deleting cancel',
          'error'
        )
      }
    })
  }

  return (
    <div className="Pagebg">
       <NavBar/>
       <div style={{paddingTop: '10%'}} ></div>
       <MDBCard className='mb-3 pt-5 shadow-0 container bg-transparent text-center mt-5 text-uppercase' >
        <h3 style={{letterSpacing:'2px'}}>Hotel List</h3>
       </MDBCard>
    <div style={{marginBottom:'10%'}}>
    <MDBCard className='text-white container  p-4'>
         <h5 className="text-muted"><u>Hotel Panel</u></h5>
         <div className='text-end'>
            <MDBBtn className='mx-2 shadow-0' outline  size='sm' color='success' onClick={goToAddHotelPage}> Add New Hotel </MDBBtn>
         </div>
     
        <MDBTable hover className='mt-2'>
          <MDBTableHead dark>
            <tr>
              <th scope='col'>Hotel Registration Id</th>
              <th scope='col'>Hotel Name</th>
              <th scope='col'>Telephone Number</th>
              <th scope='col'>Location</th>
              <th scope='col'>Status</th>
              <th scope='col'>Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
                {hotels.map((hotel,key) => (
									
                  <tr className="bg-light">
                    <td>{hotel.hotelRegNum}</td>
                    <td>{hotel.hotelName}</td>
                    <td>{hotel.telPhone}</td>
                    <td>{hotel.location}</td>
                    <td>{hotel.status}</td>
                    <td>
                      <button type="button" class="btn btn-outline-danger btn-sm d-letter-spacing shadow-0" onClick={()=>deleteHotel(hotel._id)}><MDBIcon fas icon="trash" /></button>&nbsp;&nbsp;
                      <button type="button" class="btn btn-outline-dark btn-sm d-letter-spacing shadow-0" onClick={()=>edit(
                                        hotel._id,
                                        hotel.hotelName,
                                        hotel.hotelRegNum,
                                        hotel.location,
                                        hotel.telPhone,
                                        hotel.email,
                                        hotel.description,
                                        hotel.timeStamp,
                                        hotel.username,
                                        hotel.password,
                                        hotel.status,
                                        hotel.imageUrl,
                                        )}><MDBIcon fas icon="pen-fancy" /></button>&nbsp;&nbsp;
                                        
                      
                      
                    </td>
                  </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
    </MDBCard>
    </div>
    <Footer/>
    </div>
  );
}