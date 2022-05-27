
import React, { useState , useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBCardTitle ,MDBTableHead,MDBTabs, MDBTabsItem, MDBTabsLink ,MDBTabsContent,MDBIcon ,MDBTabsPane , MDBTableBody, MDBCol, MDBRow ,MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
// import moment from 'moment';
import Swal from 'sweetalert2';
import NavBar from '../main_parts/NavBar';
import Footer from '../main_parts/footer';
import Cookies from 'js-cookie';

function AdminPaymentView() {
    const [fillActive, setFillActive] = useState('tab1');
    const handleFillClick = (value: string) => {
       if (value === fillActive) {
         return;
       }
   
       setFillActive(value);
     };

   var hotelId =Cookies.get('user_name');
   const [AllVisaPayment,setAllVisaPayment] = useState([]);
   const [AllMasterPayment,setAllMasterPayment] = useState([]);
   const [AllBankPayments,setAllBankPayments] = useState([]);
   useEffect(() => {
       axios.get(global.url+"/traveler_card_payment/allVisaPayment/user")
       .then(res => setAllVisaPayment(res.data))
       .catch(error => console.log(error));
   },[]);

   useEffect(() => {
    axios.get(global.url+"/traveler_bank_payment/allBankPayment/"+hotelId)
    .then(res => setAllBankPayments(res.data))
    .catch(error => console.log(error));
   },[]);


   useEffect(() => {
    axios.get(global.url+"/traveler_card_payment/allMasterPayment/"+hotelId)
    .then(res => setAllMasterPayment(res.data))
    .catch(error => console.log(error));
   },[]);
 
   function viewImage(image){
    Swal.fire({
        imageUrl: 'https://res.cloudinary.com/dnomnqmne/image/upload/v1649932942/'+image,
        imageWidth: '100%',
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
                                 <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>Hotel Booking's Transactions </MDBCardTitle>
                                 <hr/>
                                 <div className="text-end mt-4">
                                    <MDBBtn href='./AdminDashboard' outline  style={{ letterSpacing:'1px'}}  color="dark" className='shadow-0 btn-sm'   >Back</MDBBtn>
                                 </div>
                                 <MDBTabs fill className='mb-3 mt-2  bg-light square border'>
                                    <MDBTabsItem>
                                        <MDBTabsLink style={{padding:'0%'}} onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                                        <img src='./images/visa.png' className='img-fluid ' style={{width:'13%'}} alt='...' />
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <MDBTabsItem>
                                        <MDBTabsLink style={{padding:'0%'}} onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                                        <img src='./images/master.png' className='img-fluid ' style={{width:'13%'}} alt='...' />
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <MDBTabsItem>
                                        <MDBTabsLink style={{padding:'0%'}} onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                                        <img src='./images/deposit.png' className='img-fluid ' style={{width:'13%'}} alt='...' />
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                 </MDBTabs>
                                 <MDBTabsContent>
                                    <MDBTabsPane  show={fillActive === 'tab2'}>
                                            <MDBTable className='mt-1'>
                                            <MDBTableHead>
                                                <tr style={{backgroundColor:'#3A3A3A'}}>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Month</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Hotel Package</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Traveler</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Card Number</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Card Holder</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Date</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                            {AllMasterPayment.map((MasterPayment,key) => (
                                            
                                                <tr>
                                                    {/* <td >{moment(MasterPayment.timeStamp).format("YYYY MMMM ")}</td> */}
                                                    <td >{MasterPayment.timeStamp}</td>
                                                    <td >{MasterPayment.packageBookingID}</td>
                                                    <td >{MasterPayment.travelerID}</td>
                                                    <td >{MasterPayment.cardNumber}</td>
                                                    <td >{MasterPayment.Holder}</td>
                                                    <td >{MasterPayment.timeStamp}</td>
                                                </tr>
                                            ))}
                                            </MDBTableBody>
                                            </MDBTable>
                                    </MDBTabsPane>
                                    <MDBTabsPane  show={fillActive === 'tab1'}>
                                            <MDBTable className='mt-1'>
                                            <MDBTableHead>
                                                <tr style={{backgroundColor:'#3A3A3A'}}>
                                                <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Month</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Hotel Package</th>
=                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Traveler</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Card Number</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Card Holder</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Date</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                            {AllVisaPayment.map((VisaPayment,key) => (
                                            
                                                
                                                    <tr>
                                                    {/* <td >{moment(MasterPayment.timeStamp).format("YYYY MMMM ")}</td> */}
                                                    <td >{VisaPayment.timeStamp}</td>
                                                    <td >{VisaPayment.packageBookingID}</td>
                                                    <td >{VisaPayment.travelerID}</td>
                                                    <td >{VisaPayment.cardNumber}</td>
                                                    <td >{VisaPayment.Holder}</td>
                                                    <td >{VisaPayment.timeStamp}</td>
                                                </tr>
                                            ))}
                                            </MDBTableBody>
                                            </MDBTable>
                                    </MDBTabsPane>
                                    <MDBTabsPane  show={fillActive === 'tab3'}>

                                    <MDBTable className='mt-1'>
                                            <MDBTableHead>
                                                <tr style={{backgroundColor:'#3A3A3A'}}>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Month</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Amount</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Pay By</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Account Number</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Image Name</th>
                                                    <th scope='col' className="text-white fw-normal" style={{fontSize:'15px',letterSpacing:'1px'}}>Date</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                            {AllBankPayments.map((BankPayment,key) => (
                                            
                                                <tr>
                                                    <td >{BankPayment.timeStamp}</td>
                                                    <td >{BankPayment.amount}</td>
                                                    <td >{BankPayment.name}</td>
                                                    <td >{BankPayment.accountNumber}</td>
                                                    <td ><MDBIcon size='1x' fas icon="eye" onClick={() => viewImage(BankPayment.imageName)}  /></td>
                                                    <td >{BankPayment.timeStamp}</td>
                                                </tr>
                                            ))}
                                            </MDBTableBody>
                                            </MDBTable>
                                    </MDBTabsPane>
                                 </MDBTabsContent>
                                 
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


export default AdminPaymentView;