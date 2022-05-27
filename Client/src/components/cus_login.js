
import React, { useState , useEffect } from 'react';
import { MDBBtn , MDBCol , MDBRow, MDBIcon} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import passwordValidator from 'password-validator';
import NavBar from './main_parts/index_navbar';
import Cookies from 'js-cookie';
import NumberFormat from 'react-number-format';
import './url';
var schema = new passwordValidator();

function CusLogin() {

    const [tel, setTelephone] = useState(false);

    function loginAsStaff(){
        window.location.href = "/Login";
    }

    async function login(e)   {
        e.preventDefault();

       let item = {tel};
       let result = await fetch(global.url+"/traveler/loginTraveler", {
         method: 'POST',
         headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json"
         },
         body:JSON.stringify(item)
      });
      result = await result.json();
      
      if( JSON.stringify(result.message) === 'true'){
          Cookies.set('tel',tel, { expires: 70000, path: '' });

          	Swal.fire({  
			title: "Success!",
			text: "Login Success",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/Client_dashboard";
				}
			});
      }else{
          	Swal.fire({  
			title: "Error!",
			text: "Login Not Success",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
       }
    }

      return (
    <div>
       <NavBar/>
            <div class="global-container "  style={{paddingTop:'12%', paddingBottom:'1%'}}>
            <center>
                <div class="card login-form shadow border-0 ">
                    <div class="card-head bg-header rounded-top">
                        <h4 class="card-title text-center pt-3 pb-2  text-uppercase text-white">
                                Login Page
                        </h4>
                    </div>
                    <div class="card-body" >
                    <div class="card-text">
                        <form action="#" method="post" >
                        <h6 className="fw-normal text-black-50 text-start">Your Phone Number :</h6>
                        <div class="form-group  mt-3">
                        <NumberFormat format="### ### ####" mask="_" class="form-control"  onChange={(e) =>{
                            setTelephone(e.target.value);
                        }}/>
                        </div>
                        
                        <div class="mt-3 mb-2">
                            <div class="d-grid gap-2">
                                    <MDBBtn onClick={login} class="btn text-white  d-letter-spacing shadow-0 fw-light" style={{ backgroundColor: '#0c8066'}} ><span className="h6">Login</span></MDBBtn> 
                                    <p style={{cursor:'pointer'}} onClick={loginAsStaff}>Do you want to login as a staff?</p>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </center>
        </div>
    </div>
      )
};


export default CusLogin;