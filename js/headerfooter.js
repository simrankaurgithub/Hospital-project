class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="dropdown">
            <nav class="navigation">
                <img class="logo" src="image/logo-sahyadri.png" alt="no">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Hospitals &nbsp; <i class="fas fa-caret-down"></i> </a>
                        <ul>
                            <li><a href="pune-hospital.html">Pune</a></li>
                            <li><a href="nasik-hospital.html">Nasik</a></li>
                            <li><a href="karad-hospital.html">Karad</a></li>
                        </ul>
                    </li>
                    <li><a href="speciality.html">Specialities</a></li>
                    <li><a href="patient-review.html">Patient Reviews</a></li>
                    <li><a href="#">About Us&nbsp;<i class="fas fa-caret-down"></i></a>
                        <ul id="sim">
                            <li><a href="about-overview.html">Overview</a></li>
                            <li><a href="about-chairman.html">Chairman Message</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                </ul>
            </nav>
        </div>
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div id="footer">
    <div class="footer1">
        <div class="footer2" id="foot1">
            <h3>Sahyadri Super Speciality Hospital</h3>
            <p>The seed was sown in 1994 with Pune Institute of Neurology (PIN); a 16 bedded hospital which flourished
                into a full fledged Neurosciences Centre over 10 years. </p>
        </div>
        <div class="footer2" id="foot2">
            <h3>Quick Links</h3>
            <ul>
                <li><i class="fa-solid fa-circle-chevron-right"></i><a href="index.html"> &nbsp; Home</a></li>
                <li><i class="fa-solid fa-circle-chevron-right"></i><a href="pune-hospital.html"> &nbsp; Hospitals </a>
                </li>
                <li><i class="fa-solid fa-circle-chevron-right"></i><a href="speciality.html"> &nbsp; Specialities</a>
                </li>
                <li><i class="fa-solid fa-circle-chevron-right"></i><a href="patient-review.html"> &nbsp; Reviews </a>
                </li>
                <li><i class="fa-solid fa-circle-chevron-right"></i><a href="about-overview.html">&nbsp; About Us</a>
                </li>
                <li><i class="fa-solid fa-circle-chevron-right"></i><a href="contact.html"> &nbsp; Contacts</a></li>
            </ul>
        </div>
        <div class="footer2" id="foot3">
            <h3>Contact Info</h3>
            <p>S N. 89 & 90 , Plot No. 54, <br> Lokmanya Colony, Kothrud, <br> Pune 411038, Maharashtra, <br> India
                <br><i class="fa-solid fa-phone"></i> 020 6721 5000 <br><i class="fa-solid fa-envelope"></i> &nbsp;
                sahyadri@hospitals.com </p>
        </div>
        <div class="footer2" id="foot4">
            <h3>Book An Appointment</h3>
            <p>Quality care ranked among the best in the nation</p>
            <button id="footbtn" class="btn btn-danger " data-toggle='modal' data-target='#my_division'>Book An
                Appointment </button>
            <div id="my_division" class="modal fade" data-keyboard='false' data-backdrop='static'>
                <div class="modal-dialog modal-md modal-dialog-centered text-white">
                    <div class="modal-content bg-danger  ">
                        <div class="modal-header">
                            <p class="h1 modal-title">Appointment Form </p>
                            <button data-dismiss='modal' class="close">&times;</button>
                        </div>
                        <div class="modal-body ">
                            <form>
                                <div class="form-group " >
                                    <input type="text" class="form-control " placeholder="Your Full Name*">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Phone Number*">
                                </div>
                                <div class="form-group">
                                    <select name="sub" class="form-control" >
                                        <option>Select Treatment</option>
                                        <option value="punj">Neurosurgery</option>
                                        <option value="hr">Haematology</option>
                                        <option value="hp">Cardiology</option>
                                        <option value="jk">Pulmonology</option>
                                        <option value="rj">General-Surgery</option>
                                        <option value="up">Urology</option>
                                        <option value="">Orthopedic</option>
                                        <option value="">Nephrology</option>
                                        <option value="">Gynecology</option>
                                        <option value="">Cardiac Surgury</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select name="sub" class="form-control" >
                                        <option>Select Branch</option>
                                        <option value="punj">Pune</option>
                                        <option value="hr">Nasik</option>
                                        <option value="hr">Karad</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" placeholder="Please Tell Us Your Concern"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success w-100" data-dismiss='modal'>Get An Appointment</button>   
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</div>
                
            `
    }
}

customElements.define('my-footer', MyFooter)