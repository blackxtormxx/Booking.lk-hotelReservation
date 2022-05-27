
import React, { useState , useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBCardTitle ,MDBTableHead,MDBTabs, MDBTabsItem, MDBTabsLink ,MDBTabsContent,MDBIcon ,MDBTabsPane , MDBTableBody, MDBCol, MDBRow ,MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
// import moment from 'moment';
import Swal from 'sweetalert2';
import NavBar from '../main_parts/NavBar';
import Footer from '../main_parts/footer';
import Cookies from 'js-cookie';
import '../url';


function AdminBookedPackagesView() {
    const [fillActive, setFillActive] = useState('tab1');
    const handleFillClick = (value: string) => {
       if (value === fillActive) {
         return;
       }
   
       setFillActive(value);
     };

   var hotelId =Cookies.get('user_name');
   const [AllPackages,setAllPackages] = useState([]);
   useEffect(() => {
       axios.get(global.url+"/packageBooking/allBookings/"+hotelId)
       .then(res => setAllPackages(res.data))
       .catch(error => console.log(error));
   },[]);

   function accept(id){
        
        const status = 'Accept';
        const editPack ={
            id,
            status
        }

	    axios.put(global.url+"/packageBooking/acceptBooking/"+id,editPack).then(() =>{
			Swal.fire({  
			title: "Success!",
			text: "Hotel Booking Accepted!",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/AdminBookedPackagesView";
				}
			});

			
            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Hotel Booking Accepted",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }

   function acceptAgain(id){
        
        const status = 'Accept';
        const editPack ={
            id,
            status
        }

	    axios.put(global.url+"/packageBooking/acceptBooking/"+id,editPack).then(() =>{
			Swal.fire({  
			title: "Success!",
			text: "Hotel Booking Accepted!",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/AdminBookedPackagesView";
				}
			});

			
            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Hotel Booking Accepted",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }

   function reject(id){
        
        const status = 'Reject';
        const editPack ={
            id,
            status
        }

	    axios.put(global.url+"/packageBooking/acceptBooking/"+id,editPack).then(() =>{
			Swal.fire({  
			title: "Success!",
			text: "Hotel Booking Rejected!",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/AdminBookedPackagesView";
				}
			});

			
            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Hotel Booking Rejected",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }
   function rejectAgain(id){
        
        const status = 'Reject';
        const editPack ={
            id,
            status
        }

	    axios.put(global.url+"/packageBooking/acceptBooking/"+id,editPack).then(() =>{
			Swal.fire({  
			title: "Success!",
			text: "Hotel Booking Rejected!",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/AdminBookedPackagesView";
				}
			});

			
            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Hotel Booking Rejected",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }

    return (
        <div >
            <NavBar/>
        <div class="dashboard-wrapper">
            <div class="container" style={{paddingTop:'10%',paddingLeft:'2%', width:'98%'}}>
                 
                  <MDBRow  style={{marginTop:'3%'}}>
                    <MDBCol sm='12'>
                         <MDBCard className=" square border-bottom border-5 border-light bg-white pb-5" style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardBody className="border-0">
                                 <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>Hotel Booking Details </MDBCardTitle>
                                 <hr/>
                                 <div className="text-end mt-4">
                                    <MDBBtn href='./AdminDashboard' outline  style={{ letterSpacing:'1px'}}  color="dark" className='shadow-0 btn-sm'   >Back</MDBBtn>
                                 </div>
                                 
                                            <MDBTable className='mt-1'>
                                            <MDBTableHead>
                                                <tr style={{backgroundColor:'#3A3A3A'}}>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Month</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Hotel Package</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Traveler</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Date Duration</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Taxi Status</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Status</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Action</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                            {AllPackages.map((AllPackage,key) => (
                                            
                                                <tr>
                                                    {/* <td >{moment(MasterPayment.timeStamp).format("YYYY MMMM ")}</td> */}
                                                    <td >{AllPackage.timeStamp}</td>
                                                    <td >{AllPackage.packageName}</td>
                                                    <td >{AllPackage.ClientName}</td>
                                                    <td >From <span className="text-danger">{AllPackage.StartDate}</span> to <span className="text-danger">{AllPackage.EndDate}</span></td>
                                                    <td >{AllPackage.taxiWant}</td>
                                                    <td >{AllPackage.status}</td>
                                                    <td >
                                                        
                                                        <button style={{display: ((AllPackage.status === 'Booked'))?'inline':'none'}} className="btn btn-sm btn-success shadow-0" onClick={()=>accept(AllPackage._id)}><MDBIcon fas icon="check" /></button>&nbsp;&nbsp;
                                                        <button style={{display: ((AllPackage.status === 'Booked'))?'inline':'none'}} className="btn btn-sm btn-danger shadow-0" onClick={()=>reject(AllPackage._id)}><MDBIcon fas icon="times" /></button>
                                                        <button style={{display: ((AllPackage.status === 'Accept'))?'inline':'none'}} className="btn btn-sm btn-success shadow-0" onClick={()=>rejectAgain(AllPackage._id)}><MDBIcon fas icon="redo-alt" /></button>
                                                        <button style={{display: ((AllPackage.status === 'Reject'))?'inline':'none'}} className="btn btn-sm btn-danger shadow-0" onClick={()=>acceptAgain(AllPackage._id)}><MDBIcon fas icon="redo-alt" /></button>
                                                    </td>
                                                </tr>
                                            ))}
                                            </MDBTableBody>
                                            </MDBTable>
                                   
                                 
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
        <br/>
        <br/>
        <Footer/>
    </div>
      )
};


export default AdminBookedPackagesView;