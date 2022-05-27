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

function SuperAdminDashboard() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);
    return (
    <div>
        <NavBar/>
         <div class=" global-container2">
                <center style={{paddingTop:'13%'}}><h1 class="text-uppercase" style={{fontWeight:'700'}}>Super Admin Dashboard</h1></center>
                <MDBRow  style={{paddingTop:'1%' ,paddingLeft:'4%' ,paddingRight:'4%'}}>
                    <MDBCol sm='2'></MDBCol>
                    <MDBCol sm='4'>
                        <a href="Super_admin_hotel">
                         <MDBCard className=" square border-bottom border-5 border-dark " style={{backgroundColor:'#2E8B57' , boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'white'}}>
                               <MDBIcon fas icon="hotel text-white"   size='4x'/><br/> <span>Hotels</span>
                            </MDBCardHeader>
                        </MDBCard>
                        </a>
                    </MDBCol>
                    <MDBCol sm='4'>
                         <a href="TeacherDash">
                            <MDBCard className=" square border-bottom border-5 border-dark  " style={{backgroundColor:'#2E8B57' , boxShadow:'2px 3px 5px #BBBBBB'}}>
                                <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{color:'white'}}>
                                <MDBIcon fas icon="comment text-white" size='4x'/> <br/> <span>Complains</span>
                                </MDBCardHeader>
                            </MDBCard>
                        </a>
                    </MDBCol>
                    <MDBCol sm='2'></MDBCol>
                </MDBRow>
         </div>
    </div>
    )
};

export default SuperAdminDashboard;