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

function PackageDashboard() {
  const [showBasic, setShowBasic] = useState(false);
  const [showNavRight, setShowNavRight] = useState(false);

  function Back(){
    window.location.href = "/Client_dashboard";
  }
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const hotelId = urlParams.get('id');

  const [allHotelPackages,setallHotelPackages] = useState([]);
  useEffect(() => {
        axios.get(global.url+"/HotelPackage/allHotelPackages/"+hotelId)
        .then(res => setallHotelPackages(res.data))
        .catch(error => console.log(error));
  });


  function selectPackage(id,packageName,price,AdvancedPayment ){
    window.location.href = "/SelectPackage?pid="+id+"&hid="+hotelId+"&packageName="+packageName+"&price="+price+"&AdvancedPayment="+AdvancedPayment+"&pid="+id;
  }

    return (
    <div>
        <NavBar/>
         <div class=" global-container2">
                <center style={{paddingTop:'13%'}}><h1 class="text-uppercase" style={{fontWeight:'700'}}>Select Your Package</h1></center>
                <div className="container">
                <div className='text-end'>
                    <MDBBtn color='dark' outline href='./Client_dashboard' size='sm' className='shadow-0 me-2' >
                      Back
                    </MDBBtn>
                </div>
                    <div class="row mt-3 mb-5 ">
                    {allHotelPackages.map((allHotelPackage,key) => (
                        <div class="col-sm-3 mt-4">
                            <div class="card">
                            <img src={allHotelPackage.image} class="card-img-top" alt="..." style={{ width: '100%', height: '15vw',objectFit: 'cover'}}/>
                            <div class="card-body" style={{ width: '100%', height: '15vw',objectFit: 'cover'}}>
                                <h5 class="card-title">{allHotelPackage.packageName}</h5>
                                <div>
                                    <span className="text-muted">Price : RS.{allHotelPackage.price}.00</span><br/>
                                </div>
                                <div class="text-end mt-4">
                                    <MDBBtn tag='a' onClick={()=>selectPackage(
                                        allHotelPackage._id,
                                        allHotelPackage.packageName,
                                        allHotelPackage.price,
                                        allHotelPackage.AdvancedPayment,
                                       )} color='none'className='m-1' style={{ color: '#0F715E' }}>
                                        <MDBIcon fas icon="plus-circle" /> SELECT
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