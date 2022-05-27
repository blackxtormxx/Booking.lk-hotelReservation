import React ,{useState} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardTitle,
} from 'mdb-react-ui-kit';  
import NavBar from '../main_parts/NavBar';
import {reactLocalStorage} from 'reactjs-localstorage';
import jsPDF from 'jspdf'; 
import html2canvas from 'html2canvas';
import '../url';
export default function Admin_view_package() {

  var Admin_view_package = reactLocalStorage.getObject('Admin_view_package');
  var id = Admin_view_package[0];
  
  var aboutPackage  = Admin_view_package[4];
  const [packageName, setPackageName] = useState(Admin_view_package[1]);
  const [hotelDisBody, setDescription] = useState("");
  const [image, setimageUrl] = useState(Admin_view_package[5]);
  const [price, setPrice] =useState(Admin_view_package[3]);
  const [AdvancedPayment, setAdvancedPayment] = useState(Admin_view_package[6]);

  function Print(){
    const input = document.getElementById('pdfdiv');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 210;  
        var pageHeight = 290;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('p', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight );  
        pdf.save(packageName+".pdf");  
      });  
  }
    
  return (
    <div class=" global-container3">
         <NavBar/>
        <MDBRow style={{paddingTop: '13%'  , paddingBottom: '5%'}}>
          <MDBCol sm='3'> </MDBCol>
          <MDBCol sm='6'>
            <MDBCard className=" bg-light border">
              <MDBCardBody  >
                <div id="pdfdiv" className="p-2">
                  <div className="p-3" style={{backgroundColor:'#E0F4E6'}}>
                    <MDBCardTitle className='text-dark text-left ' style={{fontSize: '28px'}}>
                      <div className='text-center text-decoration-underline'>{packageName}</div>
                    </MDBCardTitle>
                    <img src={image} class="card-img-top" alt="..."/>
                  </div>
                  <hr/>
                  <h6 className='text-success mb-4'>Price : Rs.{price}.00</h6>
                  <h6 className='text-success mb-4' style={{lineHeight:'0px'}}>Advanced payment status : {AdvancedPayment}</h6>
                  <div
                  dangerouslySetInnerHTML={{
                    __html: aboutPackage
                  }}></div>
                </div>
                <div className='text-end'>
                 <MDBBtn href='#' color="success" className='shadow-0' onClick={Print}  >Download</MDBBtn>&nbsp;&nbsp;&nbsp;
                  <MDBBtn color='dark' href='./AdminDashboard' className='shadow-0 me-2' >
                    Back
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol sm='3'> </MDBCol>
        </MDBRow>
    </div>
  );
}