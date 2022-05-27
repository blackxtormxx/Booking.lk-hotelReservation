import React, { useState } from 'react';
import NavBar from './main_parts/index_navbar';

function Home() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);

    function Login(){
        window.location.href="./Cus_login";
    }

    function CusReg(){
        window.location.href="./CusReg";
    }
    return (
    <div>
        <NavBar/>
         <div class="global-container">
                <div class="row container" style={{paddingTop:'10%', marginBottom:'1%'}}>
                    <div class="card text-center shadow-0 bg-transparent"  style={{  left : '50%',top       : '50%', position  : 'absolute',transform : 'translate(-50%, -50%)'}}>
                            <h1 style={{fontWeight:'900' , fontSize:'550%' , letterSpacing:'4px' , color: '#EABE1D' , lineHeight:'83px'}} className="text-uppercase"> <span style={{fontWeight:'500' , fontSize:'50%' , letterSpacing:'4px' , lineHeight:'1px'}}>Welcome to</span> <br/>Booking.LK </h1>
                            <p className="text-white" style={{letterSpacing:'2px'}}>See what's waiting for you on your next island getaway. Savour the unique experiences this island treasure has to offer.</p>
                            <div>
                            <button type="button" class="btn btn-outline-light" onClick={CusReg}>Sing Up</button>&nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-light" onClick={Login}>Sing In</button>
                            </div>
                    </div>
                </div>
         </div>
    </div>
    )
};

export default Home;