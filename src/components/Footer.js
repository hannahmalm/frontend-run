// import React from "react";  --> This is done under the hood so not needed to import 
//Stateless - Presentational

//page reloads --> This is using bootstrap 
const Footer = () => {
    return(
        <div className="footer-basic">
        <footer>
            {/* <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div> */}
            {/* <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul> */}
            <p class="copyright">Hannah Malm Portfolio - 2022</p>
        </footer>
    </div>
    )
}

export default Footer;


  // <div>
        {/* <footer className="navbar fixed-bottom navbar-light bg-light">
        <div className="container"/>
        </footer> */}