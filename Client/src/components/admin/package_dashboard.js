import React, { useState ,useEffect } from 'react';
import NavBar from '../main_parts/NavBar';
import {
    MDBCard,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCardHeader,
  } from 'mdb-react-ui-kit';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import {reactLocalStorage} from 'reactjs-localstorage';
  import '../url';
import Cookies from 'js-cookie';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';

function PackageDashboard() {
  const [showBasic, setShowBasic] = useState(false);
  const [showNavRight, setShowNavRight] = useState(false);

  function goToAddPackage(){
    window.location.href="./AddHotelPackage";
    
  }

  function viewPackage(_id , packageName , hotelID , price , description,image,AdvancedPayment){
    reactLocalStorage.setObject("Admin_view_package", [_id , packageName , hotelID , price , description,image,AdvancedPayment]);
    window.location.href = "/Admin_view_package";
  }

  function editPackage(_id , packageName , hotelID , price , description,image,AdvancedPayment){
    reactLocalStorage.setObject("EditHotelPackage", [_id , packageName , hotelID , price , description,image,AdvancedPayment]);
    window.location.href = "/EditHotelPackage";
  }
        
  const [allHotelPackages,setallHotelPackages] = useState([]);
  useEffect(() => {
        axios.get(global.url+"/HotelPackage/allHotelPackages/"+Cookies.get("user_name"))
        .then(res => setallHotelPackages(res.data))
        .catch(error => console.log(error));
  });


  function deletePackage(id){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are You Sure?',
        text: "Do You Want To Delete Hotel Package? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(global.url+"/HotelPackage/deletePackage/"+id).then(() =>{
            Swal.fire({  
                title: "Success!",
                text: "Hotel Package Deleted",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"})
    
        }).catch((err)=>{
            Swal.fire({  
                title: "Error!",
                text: "Hotel Package Not Deleted",
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

  const columns = [
    { title: "Package Name", field: "packageName", },
    { title: "Price (RS.)", field: "price", },
    { title: "Description", field: "description" },
    { title: "Advanced Payment", field: "AdvancedPayment" }]

    function downlodHotelPackages(){
        const doc = new jsPDF()
        doc.text("Hotel Packages ", 20, 10)
        doc.autoTable({
          theme: "grid",
          columns: columns.map(col => ({ ...col, dataKey: col.field })),
          body: allHotelPackages
        })
        doc.save('Hotel Packages List.pdf')
    }

    return (
    <div>
        <NavBar/>
         <div class=" global-container2">
                <center style={{paddingTop:'13%'}}><h1 class="text-uppercase" style={{fontWeight:'700'}}>Your Packages</h1></center>
                <div className="container">
                <div className='text-end'>
                    <MDBBtn color='dark' href='./AdminDashboard' size='sm' className='shadow-0 me-2' >
                      Back
                    </MDBBtn>
                    <MDBBtn className='mx-2 shadow-0' outline  size='sm' color='success' onClick={goToAddPackage}> Add New Package </MDBBtn>
                    <MDBBtn className='mx-2 shadow-0' outline  size='sm' color='danger' onClick={downlodHotelPackages}> Download Package </MDBBtn>

                </div>
                    <div class="row mt-3 mb-5 ">
                    {allHotelPackages.map((allHotelPackage,key) => (
                        <div class="col-sm-3 mt-4">
                            <div class="card">
                            <img src={allHotelPackage.image} class="card-img-top" alt="..." style={{ width: '100%', height: '15vw',objectFit: 'cover'}}/>
                            <div class="card-body">
                                <h5 class="card-title">{allHotelPackage.packageName}</h5>
                                <div>
                                    <span className="text-muted">Price : RS.{allHotelPackage.price}.00</span><br/>
                                </div>
                                <div class="text-end">
                                    <MDBBtn tag='a' onClick={()=>deletePackage(
                                        allHotelPackage._id)} color='none'className='m-1' style={{ color: '#D10A0A' }}>
                                        <MDBIcon fas icon='trash' size='lg' />
                                    </MDBBtn>
                                    <MDBBtn tag='a'  onClick={()=>viewPackage(
                                        allHotelPackage._id,
                                        allHotelPackage.packageName,
                                        allHotelPackage.hotelID,
                                        allHotelPackage.price,
                                        allHotelPackage.description,
                                        allHotelPackage.image,
                                        allHotelPackage.AdvancedPayment,
                                       
                                        )}  color='none' className='m-1' style={{ color: '#0F7837' }}>
                                        <MDBIcon fas icon='eye' size='lg' />
                                    </MDBBtn> 
                                    <MDBBtn tag='a'  onClick={()=>editPackage(
                                        allHotelPackage._id,
                                        allHotelPackage.packageName,
                                        allHotelPackage.hotelID,
                                        allHotelPackage.price,
                                        allHotelPackage.description,
                                        allHotelPackage.image,
                                        allHotelPackage.AdvancedPayment,
                                       
                                        )}  color='none' className='m-1' style={{ color: '#0F7837' }}>
                                        <MDBIcon fas icon='pencil-alt' size='lg' />
                                    </MDBBtn>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         </div>
    </div>
    )
};

export default PackageDashboard;