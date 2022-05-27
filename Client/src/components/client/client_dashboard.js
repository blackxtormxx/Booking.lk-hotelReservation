import React, { useState ,useEffect } from 'react';
import NavBar from '../main_parts/NavBar';
import {
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
  } from 'mdb-react-ui-kit';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import {reactLocalStorage} from 'reactjs-localstorage';
  import '../url';
  import Cookies from 'js-cookie';

function ClientDashboard() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);
    const [wishes, setWishes] = useState("");
    const [hotels,setAllHotels] = useState([]);
    const [userName,setuserName] = useState();

    useEffect(() => {
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        setWishes("Good Morning!");
    } else if (hr == 12) {
        setWishes("Good Noon!");
    } else if (hr >= 12 && hr <= 17) {
        setWishes("Good Afternoon!");
    } else {
        setWishes("Good Evening!");
    }
  
        axios.get(global.url+"/hotel/allHotels")
        .then(res => setAllHotels(res.data))
        .catch(error => console.log(error));
  });

  function selectPackage(_id){
    window.location.href = "/Package_for_hotel?id="+_id;
  }
    return (
    <div>
        <NavBar/>
         <div class=" global-container2">
                <center style={{paddingTop:'13%'}}>
                    <h1 class="text-uppercase" style={{fontWeight:'700'}}>{wishes} <span className="text-danger">{userName}</span></h1>
                    <p style={{letterSpacing:'2px'}}>Hotel List</p>
                </center>
                <div className="container">
                    <div class="row mt-3 mb-5 ">
                    {hotels.map((hotel,key) => (
                        <div class="col-sm-3 mt-4">
                            <div class="card">
                            <img src={hotel.imageUrl} class="card-img-top" alt="..." style={{ width: '100%', height: '15vw',objectFit: 'cover'}}/>
                            <div class="card-body" style={{ width: '100%', height: '15vw',objectFit: 'cover'}}>
                                <h5 class="card-title">{hotel.hotelName}</h5>
                                <div>
                                    <span className="text-muted">Location : {hotel.location}</span><br/>
                                    <span className="text-muted">Telephone : {hotel.telPhone} </span><br/>
                                    <span className="text-muted">Email : {hotel.email} </span><br/>
                                </div>
                                <div className="text-end">
                                    <MDBBtn tag='a' onClick={()=>selectPackage(
                                        hotel.username
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
            <br/>
         </div>
    </div>
    )
};

export default ClientDashboard;