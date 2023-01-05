import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="container text-light">
            <div className="row">
                <div className="col-5 part part-1">
                <a className="navbar-brand" href="#">
                    <h1 className="text-light fw-bold fs-2 d-inline">Logis</h1>
                </a>
                <p className="mt-2">Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                <div className="d-flex social-links">
                    <a href="js:"><i className="fa-brands fa-twitter" /></a>
                    <a href="js:"><i className="fa-brands fa-facebook" /></a>
                    <a href="js:"><i className="fa-brands fa-instagram" /></a>
                    <a href="js:"><i className="fa-brands fa-linkedin" /></a>
                </div>
                </div>
                <div className="col-2 part part-2">
                <h5>Useful Links</h5>
                <ul>
                    <li><a href="js:">Home</a></li>
                    <li><a href="js:">About Us</a></li>
                    <li><a href="js:">Services</a></li>
                    <li><a href="js:">Terms of service</a></li>
                    <li><a href="js:">Privacy policy</a></li>
                </ul>
                </div>
                <div className="col-2 part part-2">
                <h5>Our Services</h5>
                <ul>
                    <li><a href="js:">Web Design</a></li>
                    <li><a href="js:">Web Development</a></li>
                    <li><a href="js:">Product Management</a></li>
                    <li><a href="js:">Marketing</a></li>
                    <li><a href="js:">Graphic Design</a></li>
                </ul>
                </div>
                <div className="col-3 part part-4">
                <h5>Contact Us</h5>
                <p>A108 Adam Street
                    New York, NY 535022
                    United States
                    <br />
                    <br />
                    <strong>Phone:</strong> +1 5589 55488 55 <br />
                    <strong>Email:</strong> info@example.com
                </p>
                </div>
            </div>
            </div>
        </footer>
    </div>

  )
}

export default Footer
