    
import React, { useState , useEffect } from 'react';
import {
  MDBIcon,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';

function Footer() {
    const [showBasic, setShowBasic] = useState(false);
    const [showNavRight, setShowNavRight] = useState(false);
    return (
            <div>
                    <footer class="text-center text-lg-start bg-dark text-muted">
                            <section
                                class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                            >
                                <div class="me-5 d-none d-lg-block">
                                <span class="text-warning">Get connected with us on social networks:</span>
                                </div>

                                <div>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-google"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-github"></i>
                                </a>
                                </div>
                            </section>

                            <section class="">
                                <div class="container text-center text-md-start mt-5">
                                <div class="row mt-3">
                                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h4 class="text-uppercase fw-bold mb-4" style={{letterSpacing:'3px'}}>
                                        <MDBIcon fas icon="book-open" className="text-danger"/> <span className="text-danger">&nbsp;E</span><span className="text-white">-Learning</span>
                                    </h4>
                                    <p>
                                        Every individual has the potential to create change, whether in their life, their community, or the world. The transformative power of education is what unlocks that potential.
                                    </p>
                                    </div>
                                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-normal text-F1F1F1 mb-4">
                                        Userful Links
                                    </h6>
                                    <p>
                                        <a href="#!" class="text-reset">Affilliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Sitemap</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Privacy Policy</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Careers</a>
                                    </p>
                                    </div>
                                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-normal text-F1F1F1 mb-4">
                                    &nbsp;
                                    </h6>
                                    <p>
                                        <a href="#!" class="text-reset">Blogs</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Contact Us</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Help Center</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-reset">Terms</a>
                                    </p>
                                    </div>

                                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 class="text-uppercase fw-normal text-F1F1F1 mb-4">
                                        Contact
                                    </h6>
                                    <p><i class="fas fa-home me-3"></i> 89, Galle Road, Kandy</p>
                                    <p>
                                        <i class="fas fa-envelope me-3"></i>
                                        elearning@gmail.com
                                    </p>
                                    <p><i class="fas fa-phone me-3"></i> + 94 10 88 7822</p>
                                    <p><i class="fas fa-print me-3"></i> + 94 11 78 2390</p>
                                    </div>

                                </div>

                                </div>
                            </section>



                            <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                                © 2021 Copyright:
                                <a class="text-reset fw-bold" href="https://elearning.com">elearning.com</a>
                            </div>

                            </footer>
                </div>
          )
};

export default Footer;