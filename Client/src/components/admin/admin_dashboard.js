import React, { useState } from 'react';
import NavBar from '../main_parts/NavBar';
import {
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCardHeader,
  } from 'mdb-react-ui-kit';

function AdminDashboard() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);
    return (
    <div>
        <NavBar/>
         <div class=" global-container2">
                <center style={{paddingTop:'13%'}}><h1 class="text-uppercase" style={{fontWeight:'700'}}>Admin Dashboard</h1></center>
                <MDBRow  style={{paddingTop:'1%' ,paddingLeft:'4%' ,paddingRight:'4%'}}>
                   
                    <MDBCol sm='4'>
                        <a href="PackageDashboard">
                         <MDBCard className=" square border-bottom border-5 border-dark " style={{backgroundColor:'#2E8B57' , boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'white'}}>
                               <MDBIcon fas icon="hotel text-white"   size='4x'/><br/> <span>Hotel Package</span>
                            </MDBCardHeader>
                        </MDBCard>
                        </a>
                    </MDBCol>
                    <MDBCol sm='4'>
                         <a href="AdminBookedPackagesView">
                            <MDBCard className=" square border-bottom border-5 border-dark  " style={{backgroundColor:'#2E8B57' , boxShadow:'2px 3px 5px #BBBBBB'}}>
                                <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'white'}}>
                                <MDBIcon fas  icon="cubes text-white" size='4x'/> <br/> <span>Package Booking</span>
                                </MDBCardHeader>
                            </MDBCard>
                        </a>
                    </MDBCol>
                    <MDBCol sm='4'>
                         <a href="Payment_dashboard">
                            <MDBCard className=" square border-bottom border-5 border-dark  " style={{backgroundColor:'#2E8B57' , boxShadow:'2px 3px 5px #BBBBBB'}}>
                                <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'white'}}>
                                <MDBIcon fas  icon="cubes text-white" size='4x'/> <br/> <span>Payments</span>
                                </MDBCardHeader>
                            </MDBCard>
                        </a>
                    </MDBCol>
                    
                </MDBRow>
         </div>
    </div>
    )
};

export default AdminDashboard;