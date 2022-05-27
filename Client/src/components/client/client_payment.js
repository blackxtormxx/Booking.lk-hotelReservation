import React ,{useState , useEffect} from 'react';
import {
  MDBRow,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCard,
  MDBCol,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import axios from 'axios';
import Swal from 'sweetalert2';
import NumberFormat from 'react-number-format';
import Cookies from 'js-cookie';
import NavBar from '../main_parts/NavBar';

export default function ClientPayment() {
  const [fillActive, setFillActive] = useState('tab1');
  const [imageSelected, setimageSelected] = useState("");
  
  const [VisaCardNumber, setVisaCardNumber] = useState("");
  const [VisaCardHolder, setVisaCardHolder] = useState("");
  const [VisaCardExpireDate, setVisaCardExpireDate] = useState("");
  const [VisaCardCCV, setVisaCardCCV] = useState("");
  const [VisaCardAmount, setVisaCardAmount] = useState("");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const payId = urlParams.get('payId');
  const advancedPaymentAmount = urlParams.get('advancedPaymentAmount');
  const hotelID = urlParams.get('hotelID');

  const [MasterCardNumber, setMasterCardNumber] = useState("");
  const [MasterCardHolder, setMasterCardHolder] = useState("");
  const [MasterCardExpireDate, setMasterCardExpireDate] = useState("");
  const [MasterCardCCV, setMasterCardCCV] = useState("");
  const [MasterCardAmount, setMasterCardAmount] = useState("");
  
  const [accountNumber, setBankAccountNumber] = useState("");
  const [DepositorName, setDepositorName] = useState("");
  const [depositAmount, setDepositAmount] = useState("");


  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  function setPay(){
    const formData = new FormData();
    formData.append("file" ,imageSelected);
    formData.append("upload_preset", "ml_default");

    axios.post("https://api.cloudinary.com/v1_1/dnomnqmne/image/upload",formData).then((response)=>{
      var name = DepositorName;
      var amount = advancedPaymentAmount;
      var packageBookingID =  payId;
      const imageName =imageSelected.name;
      var travelerID =  Cookies.get('tel');
      const addPayment ={accountNumber,hotelID,payId,name,packageBookingID,travelerID,amount,imageName}

      axios.post("http://localhost:5000/traveler_bank_payment/addBankPayment",addPayment).then(() =>{

      Swal.fire({  
        title: "Success!",
        text: "Payment Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
          window.location.href = "/Client_dashboard";
        }
      });

      
      }).catch((err)=>{

            Swal.fire({  
            title: "Error!",
            text: "Payment Not Success",
            icon: 'error',
            confirmButtonText: "OK",
            type: "success"})
      })
    });
  }

  function payUsingVisa(e){
    e.preventDefault();
    var packageBookingID =  payId;
    var cardName =  "Visa";
    var cardNumber =  VisaCardNumber;
    var Holder =  VisaCardHolder;
    var cvv =  VisaCardCCV;
    var expireDate =  VisaCardExpireDate;
    var amount =  advancedPaymentAmount;
    var travelerID = Cookies.get('tel');

    const addPayment ={payId,cardName, cardNumber, packageBookingID,travelerID, Holder, cvv, expireDate,amount,hotelID}

      axios.post("http://localhost:5000/traveler_card_payment/addCardPayment",addPayment).then(() =>{

      Swal.fire({  
      title: "Success!",
      text: "Payment Success!",
      icon: 'success',
      confirmButtonText: "OK",
      type: "success"}).then(okay => {
      if (okay) {
        window.location.href = "/Client_dashboard";
      }
      });

      
  }).catch((err)=>{

        Swal.fire({  
        title: "Error!",
        text: "Payment Not Success",
        icon: 'error',
        confirmButtonText: "OK",
        type: "success"})
    })
  }

  function payUsingMaster(e){
    e.preventDefault();
    var packageBookingID =  payId;
    var cardName =  "Master";
    var cardNumber =  MasterCardNumber;
    var Holder =  MasterCardHolder;
    var cvv = MasterCardCCV;
    var expireDate =  MasterCardExpireDate;
    var amount =  advancedPaymentAmount;
    var travelerID = Cookies.get('tel');
    const addPayment ={payId,cardName, cardNumber, packageBookingID,travelerID, Holder, cvv, expireDate,amount,hotelID}

      axios.post("http://localhost:5000/traveler_card_payment/addCardPayment",addPayment).then(() =>{

      Swal.fire({  
      title: "Success!",
      text: "Payment Success!",
      icon: 'success',
      confirmButtonText: "OK",
      type: "success"}).then(okay => {
      if (okay) {
        window.location.href = "/Client_dashboard";
      }
      });

      
  }).catch((err)=>{

        Swal.fire({  
        title: "Error!",
        text: "Payment Not Success",
        icon: 'error',
        confirmButtonText: "OK",
        type: "success"})
    })
  }
  return (
    <div >
       <NavBar/>
       <MDBRow style={{paddingTop: '10%' , marginBottom: '5%'}}>
          <MDBCol sm='3'> </MDBCol>
          <MDBCol sm='6'>
            <MDBCard className="p-4 shadow-0 border" style={{backgroundColor:'#FCFCFC'}}>
                <MDBTabs fill className='mb-3 square border'>
                  <MDBTabsItem>
                    <MDBTabsLink style={{padding:'0%'}} onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                      <img src='./images/visa.png' className='img-fluid ' style={{width:'23%'}} alt='...' />
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink style={{padding:'0%'}} onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                      <img src='./images/master.png' className='img-fluid ' style={{width:'23%'}} alt='...' />
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink style={{padding:'0%'}} onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                      <img src='./images/deposit.png' className='img-fluid ' style={{width:'23%'}} alt='...' />
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                  <MDBTabsPane  show={fillActive === 'tab1'}>
                    <h5 style={{lineHeight:'0%'}} className='text-start text-black-50 pt-4'>PAY VIA VISA</h5>
                    <hr style={{backgroundColor:'#D7D7D7'}}/>
                    <div className='row'>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>Card Number</label>
                            <NumberFormat format="#### #### #### ####"  className="form-control" style={{border:'1px solid #D7D7D7'}} placeholder="0000 0000 0000 0000"  onChange={(e) =>{
                                setVisaCardNumber(e.target.value);
                            }}/>
                          </div>
                      </div>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>Name Of Card Holder</label>
                            <input type="text" className="form-control" style={{border:'1px solid #D7D7D7'}}  onChange={(e) =>{
                                setVisaCardHolder(e.target.value);
                            }}/>
                          </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>Expire Date</label>
                            <NumberFormat format="##/##"  className="form-control" style={{border:'1px solid #D7D7D7'}} placeholder="YY/MM"  onChange={(e) =>{
                                setVisaCardExpireDate(e.target.value);
                            }}/>
                          </div>
                      </div>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>CCV</label>
                            <NumberFormat format="###"  className="form-control" style={{border:'1px solid #D7D7D7'}} placeholder="000"  onChange={(e) =>{
                                setVisaCardCCV(e.target.value);
                            }}/>
                          </div>
                      </div>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>Amount</label>
                            <input type="number" className="form-control" style={{border:'1px solid #D7D7D7'}} disabled value={advancedPaymentAmount} onChange={(e) =>{
                                setVisaCardAmount(e.target.value);
                            }}/>
                          </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <MDBBtn color="success" onClick={payUsingVisa}  className="shadow-0">PAY NOW <MDBIcon size='1x' fas icon="money-bill"  /></MDBBtn>
                    </div>
                  </MDBTabsPane>
                  <MDBTabsPane  show={fillActive === 'tab2'}>
                    <h5 style={{lineHeight:'0%'}} className='text-start text-black-50 pt-4'>PAY VIA MASTER CARD</h5>
                    <hr style={{backgroundColor:'#D7D7D7'}}/>
                    <div className='row'>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label class="form-label" style={{lineHeight:'0%' , border:'none'}}>Card Number</label>
                            <NumberFormat format="#### #### #### ####"  className="form-control" style={{border:'1px solid #D7D7D7'}} placeholder="0000 0000 0000 0000" onChange={(e) =>{
                                setMasterCardNumber(e.target.value);
                            }}/>
                          </div>
                      </div>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>Name Of Card Holder</label>
                            <input type="text" className="form-control" style={{border:'1px solid #D7D7D7'}}  onChange={(e) =>{
                                setMasterCardHolder(e.target.value);
                            }}/>
                          </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>Expire Date</label>
                            <NumberFormat format="##/##"  className="form-control" style={{border:'1px solid #D7D7D7'}} placeholder="YY/MM"  onChange={(e) =>{
                                setMasterCardExpireDate(e.target.value);
                            }}/>
                          </div>
                      </div>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>CCV</label>
                            <NumberFormat format="###"  className="form-control" style={{border:'1px solid #D7D7D7'}} placeholder="000"  onChange={(e) =>{
                                setMasterCardCCV(e.target.value);
                            }}/>
                          </div>
                      </div>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>Amount</label>
                            <input type="number" className="form-control" disabled value={advancedPaymentAmount} style={{border:'1px solid #D7D7D7'}}  onChange={(e) =>{
                                setMasterCardAmount(e.target.value);
                            }}/>
                          </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <MDBBtn color="success" onClick={payUsingMaster}   className="shadow-0">PAY NOW <MDBIcon size='1x' fas icon="money-bill"  /></MDBBtn>
                    </div>
                  </MDBTabsPane>
                  <MDBTabsPane show={fillActive === 'tab3'}>
                    <h5 style={{lineHeight:'0%'}} className='text-start text-black-50 pt-4'>PAY VIA BANK TRANSFER</h5>
                    <hr style={{backgroundColor:'#D7D7D7'}}/>
                    <div className='row'>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>Account Number</label>
                            <input type="number" className="form-control" style={{border:'1px solid #D7D7D7'}} onChange={(e) =>{
                                setBankAccountNumber(e.target.value);
                            }}/>
                          </div>
                      </div>
                      <div className='col'>
                          <div className="mb-3 mt-4">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>Name </label>
                            <input type="text" className="form-control" style={{border:'1px solid #D7D7D7'}} onChange={(e) =>{
                                setDepositorName(e.target.value);
                            }}/>
                          </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                          <div className="mb-3 mt-2">
                            <label className="form-label" style={{lineHeight:'0%' , border:'none'}}>Amount</label>
                            <input type="number" className="form-control" disabled value={advancedPaymentAmount} style={{border:'1px solid #D7D7D7'}} onChange={(e) =>{
                                setDepositAmount(e.target.value);
                            }}/>
                          </div>
                      </div>
                    </div>
                    <div className="mb-3 mt-2">
                      <input type="file" onChange={(e) =>{
                      setimageSelected(e.target.files[0]);
                      }} className="form-control" id="customFile" />
                    </div>
                    <div className="text-end">
                      <MDBBtn color="success" onClick={setPay} className="shadow-0">PAY NOW <MDBIcon size='1x' fas icon="money-bill"  /></MDBBtn>
                    </div>
                  </MDBTabsPane>
                </MDBTabsContent>
            </MDBCard>
          </MDBCol>
          <MDBCol sm='3'> </MDBCol>
        </MDBRow>
    </div>
  );
}